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
import Buy from './Buy';
import InstantOffer from './InstantOffer';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import HomeSearchLinks from '@/components/fluid/HomeSearchLinks';

import styles from './page.module.scss'

export default function Home() {
  
  return (
    <main className={styles.main}>
      <Header />
      <ThreeByOneBlocksSellEasy />
      <InstantOffer />
      {/* <ListingForOne /> */}
      <HowItWorks />
      <Buy />
      <Testimonials />
       {/* <HomeSearchLinks
        main_component_style={"main-component-gray"}
        centered_style={"centered-content2"}
        /> */}
      <Footer />
    </main>
  )
}
