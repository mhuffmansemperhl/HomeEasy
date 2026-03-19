
import { reviewHelper } from "./helpers/reviewHelper";
import RealtorPageClient from "./RealtorPageClient";

// const ZILLOW_PARTNER_ID = process.env.ZILLOW_PARTNER_ID; // Ensure this is set in your environment variables

async function getRealtorData(slug) {
  try {
    const response = await fetch(
      `https://realtor-admin-panel.vercel.app/api/realtors?where[slug][equals]=${slug}`,
      { next: { revalidate: 3600 } }
    )
    const data = await response.json()
    //add name to the data object for metadata generation
    if (data.docs && data.docs.length > 0) {
      data.docs[0].name = data.docs[0].firstName + ' ' + data.docs[0].lastName
    }
    return data.docs && data.docs.length > 0 ? data.docs[0] : null
  } catch (error) {
    console.error('Error fetching realtor data:', error)
    return null
  }
}

// async function getSemperReviews(){
//   try {
//    const url = `https://mortgageapi.zillow.com/zillowLenderReviews?partnerId=${ZILLOW_PARTNER_ID}&reviewLimit=6&companyName=Semper%20Home%20Loans,%20Inc.&nmlsId=1053`;
// 	const response = await fetch(url);
// 	const semperData = await response.json();
//   const processedReviews = reviewHelper(semperData);

// 	return processedReviews;
//   } catch (error) {
//     console.error('Error fetching Semper reviews:', error)
//     return []
//   }
// }

export async function generateMetadata({ params }) {
  const realtorData = await getRealtorData(params.slug)
  return {
    title: realtorData?.name ? `${realtorData.name} - Realtor at HomeEasy` : 'Realtor - HomeEasy',
    description: realtorData?.biography || 'Find your realtor at HomeEasy Homes'
  }
}

export default async function RealtorPage({ params }) {
  const realtorData = await getRealtorData(params.slug)
  // const semperReviews = await getSemperReviews();


  return (
    <RealtorPageClient realtorData={realtorData} />
  )
}
