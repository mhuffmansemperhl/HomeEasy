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
import HomeEasyAgents from './HomeEasyAgents';
// import GetStarted from './GetStarted';
// import InstantOffer from './InstantOffer';
// import ListingForOne from './ListingForOne';
// import HomeEasyBuyers from './HomeEasyBuyers';
import Questions from '@/components/fluid/Questions';
// import HowItWorks from './HowItWorks';
// import Testimonials from './Testimonials';
// import Accolades from './Accolades';
// import Plan from './Plan';
import HomeSearchLinks from '@/components/fluid/HomeSearchLinks';


import styles from './page.module.scss'

export default function Home() {
  
  return (
    <main className={styles.main}>
      <Header />
      <ThreeByOneBlocksSellEasy />
      {/* <InstantOffer /> */}
      {/* <ListingForOne /> */}
      <HomeEasyAgents />
      {/* <HowItWorks /> */}
      {/* <GetStarted /> */}
      {/* <Testimonials /> */}
      {/* <Accolades /> */}
      {/* <Plan /> */}
      <Questions 
        question_show_link={true}
        question_questions={[
          {
              title: "Why should I partner up with HomeEasy Homes?",
              copy: "Elevate your business. Engage motivated, pre-approved buyers. Simplify transactions, concentrate on dedicated clients, and enhance negotiation capabilities, leading to quicker, seamless deals. Empower sellers with instant all-cash offers, reducing listing stress. Our real estate brokerage and closing units team up with mortgage experts, guaranteeing clients a fantastic deal and a frictionless process. When your clients save thousands, you'll be the high-five hero!",
              visible: false,
          },
          {
              title: "Can I keep working with buyers and sellers outside of HomeEasy Homes?",
              copy: "You bet! At HomeEasy Homes, we are committed to enhancing your business, not replacing it.",
              visible: false,
          },
          {
              title: "Can I list homes that HomeEasy Homes owns?",
              copy: "Eh, not quite. When it comes to listings, you'll collaborate with clients who've chosen HomeEasy Homes to explore selling options but decided that the conventional listing route is the ideal choice for them.",
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
