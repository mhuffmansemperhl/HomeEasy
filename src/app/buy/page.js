
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
                copy: "Thinking about buying a home with HomeEasy Homes? We make it easy to get started—just answer a few quick <a href=https://homeeasyhomes.com/get_started?flow=buy&step=1 target=_blank> questions</a>. From there, one of our friendly team members will reach out to learn a bit more about you and your home search. We can do it through call or text, whatever you prefer!<br /><br />Next, we’ll match you with a loan officer from our preferred lender, because step one is always pre-approval. Knowing your budget means you’re ready to pounce when the right home pops up.<br /><br />We'll also pair you with one of our top local agents who knows your neighborhood like the back of their hand. And don’t worry—we’ll be checking in and guiding you every step of the way to keep things smooth, simple, and (mostly) stress-free.",
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
        

      <Footer />
    </main>
  )
}
