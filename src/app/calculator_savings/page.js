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
import Disclaimer from './Disclaimer';
import Calculator from './Calculator';
// import ThreeByOneBlocksSellEasy from './ThreeByOneBlocksSellEasy';
// import HomeEasyBuyers from './HomeEasyBuyers';
// import GetStarted from './GetStarted';
// import InstantOffer from './InstantOffer';
// import ListingForOne from './ListingForOne';
// import HomeEasyBuyers from './HomeEasyBuyers';
// import Questions from '@/components/fluid/Questions';
// import HowItWorks from './HowItWorks';
// import Testimonials from './Testimonials';
// import Accolades from './Accolades';
// import Plan from './Plan';
// import Destress from './Destress';
import HomeSearchLinks from '@/components/fluid/HomeSearchLinks';

import styles from './page.module.scss'

export default function Home() {
  
  return (
    <main className={styles.main}>
      <Header />
      {/* <Destress /> */}
      {/* <ThreeByOneBlocksSellEasy /> */}
      {/* <InstantOffer /> */}
      {/* <ListingForOne /> */}
      {/* <HomeEasyBuyers /> */}
      {/* <HowItWorks /> */}
      {/* <GetStarted /> */}
      {/* <Testimonials /> */}
      {/* <Accolades /> */}
      {/* <Plan /> */}
      <Calculator />
      <Disclaimer />

      <HomeSearchLinks
        main_component_style={"main-component-white"}
        centered_style={"centered-content2"}
        />

      <Footer />
    </main>
  )
}
