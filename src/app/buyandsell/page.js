// import Header from '../components/Header';
// import Testamonials from '../components/Testamonials';
// import Advantage from '../components/Advantage';
// import Difference from '../components/Difference';
// import Destress from '../components/Destress';
// import Questions from '../components/Questions';
// import Plan from '../components/Plan';
// import GettingStarted from '../components/GettingStarted';
import Header from './Header';
import Footer from '@/components/fluid/Footer';
import ThreeByOneBlocksSellEasy from './ThreeByOneBlocksSellEasy';
// import HomeEasyBuyers from './HomeEasyBuyers';
import GetStarted from './GetStarted';
import InstantOffer from './InstantOffer';
import ListingForOne from './ListingForOne';
import HomeEasyBuyers from './HomeEasyBuyers';
import Questions from '@/components/fluid/Questions';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import Accolades from './Accolades';
import Plan from './Plan';
import HomeSearchLinks from '@/components/fluid/HomeSearchLinks';

import styles from './page.module.scss'

export default function Home() {
  
  return (
    <main className={styles.main}>
      <Header />
      <ThreeByOneBlocksSellEasy />
      <InstantOffer />
      <ListingForOne />
      <HomeEasyBuyers />
      <HowItWorks />
      <GetStarted />
      <Testimonials />
      <Accolades />
      <Plan />
      <Questions 
        question_index={0}
        question_show_link={true}
        question_questions={[
          {
              title: "What types of homes do you make cash offers on?",
              copy: "We can only buy homes within our service areas and if the seller has clear ownership of the property.  Types of homes include single family homes, townhomes, duplexes, and condos.  We consider many factors when making an offer including the home&apos;s materials and overall condition.  The criteria below may impact our ability to make an InstantOffer:<br/><br/>• Your home is being sold as a short sale or foreclosure<br/>• Your home has un-permitted additions<br/>• Significant foundation issues, or was damaged by floods, fire, or other natural disasters<br/>• Your home has dated materials<br/>• Your home has active organic growth",
              visible: false,
          },
          {
              title: "How do you assess my home&apos;s value?",
              copy: "Our dedicated research team delves into every detail, from your home&apos;s unique features to neighborhood trends and current market dynamics.  We conduct a thorough analysis by comparing your home to similar properties in the area, considering factors like square footage, number of bedrooms, and more.  By examining the selling and pending prices of these comparable homes, as well as assessing the overall market conditions, we gain valuable insights.<br/><br/>Why do we go through this process?  Well, nearby homes provide a reliable benchmark for gauging how much potential buyers may be willing to pay for your property.  Additionally, studying the market as a whole helps us understand the level of demand.   If there&apos;s a shortage of listed homes, it often leads to price increases, ultimately boosting the value of your own home.<br/><br/>Rest assured, we leave no stone unturned when it comes to researching and analyzing the factors that influence the market value of your home.  By staying informed and up-to-date, we can provide you with accurate and reliable information to make the best decisions throughout the selling process.",
              visible: false,
          },
          {
              title: "How do I request an instant cash offer from HomeEasy Homes?",
              copy: "If you are looking for a fast, easy, stress-free way of selling your home, all you need to do is request an InstantOffer.  Don&apos;t worry, the process is simple, fast, a completely obligation free.  Just enter in your address and we&apos;ll guide you through a few brief questions about the condition, features, and upgrades of your home.  We genuinely want to understand all the unique aspects that make your home special, and we&apos;ll take these details into account when creating your personalized InstantOffer.",
              visible: false,
          },
          {
              title: "How fast will I receive my InstantOffer?",
              copy: "Well just as the name suggests…pretty instant!  Typically, you will be provided with a cash offer within 24 hours.",
              visible: false,
          },        
      ]}
      />
        <HomeSearchLinks
        main_component_style={"main-component-gray"}
        centered_style={"centered-content2"}
        />
      <Footer />
    </main>
  )
}
