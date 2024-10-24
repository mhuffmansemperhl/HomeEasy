
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
       
      <Footer />
    </main>
  )
}
