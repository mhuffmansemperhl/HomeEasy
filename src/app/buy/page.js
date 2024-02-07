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
import ThreeByOneBlocksBuyEasy from './ThreeByOneBlocksBuyEasy';
import HomeEasyBuyers from './HomeEasyBuyers';
import Sell from './Sell';
// import InstantOffer from './InstantOffer';
// import ListingForOne from './ListingForOne';
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
      <ThreeByOneBlocksBuyEasy />
      <HomeEasyBuyers />
      <HowItWorks />
      <Sell />
      <Testimonials />
      <Accolades />
      {/* <InstantOffer /> */}
      {/* <ListingForOne /> */}
      {/* <HowItWorks /> */}
      {/* <Testimonials /> */}
      {/* <Accolades /> */}
      <Plan />
      <Questions 
        question_index={2}
        question_show_link={true}
        question_questions={[
            {
                title: "What are the perks of buying a home with HomeEasy Homes?",
                copy: "We like to think that there are many!  We’ll connect you with a top-notch, local real estate agent who genuinely cares about your needs and knows your neighborhood like the back of their hand.  Rest assured we always have your best interest at heart.  Your agent is there to guide you every step of the way, ensuring your home buying journey is smooth, successful, and tailored to your unique situation.  HomeEasy buyers also have instant access to homes and exclusive alerts before some homes even hit the market.  Even better, our buyer’s rebate cuts your interest rate, lowering the monthly payment for your entire mortgage, which means you may be pre-approved for more!  You also get to make the most of our tight-knit group of local agents, loan experts, title companies and more to maximize your savings!  We’re your wallet’s new BFF!",
                visible: false,
            },
            {
                title: "How does buying a home from you work?",
                copy: "Just like buying a home with a traditional broker – just a lot easier.  Everything you need to get started is right here at your fingertips.  Click through homes, 3D floor plans, virtual tours, detailed home descriptions, and location maps.  We even have a built in payment calculators to help you estimate your monthly costs.<br/><br/>Found a home that catches your eye? Right from the listing page, you will be instantly matched with one of our friendly local real estate experts.  They’re ready to provide you with the personalized guidance and support you need throughout your homebuying journey.<br/><br/>No need to stress or search endlessly – we’ve simplified the process to make it seamless and enjoyable for you.  So go ahead and start searching for your dream home right here, right now.  Your next home is just a click away!",
                visible: false,
            },
            {
                title: "So, I’m ready to put an offer in on a home, what’s next?",
                copy: "Congrats! You found a home you love! We will start the process by matching you with a top local real estate expert who is there to guide you every step of the way, ensuring your homebuying journey is smooth, successful, and tailored to your unique needs.  From there, your agent will reach out and review your offer and answer any questions you may have.  They can also refer you to one of our mortgage experts to get you pre-approved and increase your buying power.  Once you and your agent come up with an offer you are comfortable with, you’ll be able to sign and submit it digitally.<br/><br/>If your offer is accepted, your agent will draft a purchase agreement for both parties to sign.  Once the T’s are crossed and the I’s are dotted, you are officially in escrow.<br/><br/>If your offer is not accepted, we know it can be heartbreaking, but your agent will remain by your side and there to land the next one!",
                visible: false,
            },
            {
                title: "Are there any fees associated with buying a home with HomeEasy Homes?",
                copy: "Nope! As a buyer, you’re never charged any extra fees to purchase a home.  Just the standard costs of buying a home including the down payment, inspection fee, appraisal fee, and closing costs.",
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
