
import Header from './Header';
import Footer from '@/components/fluid/Footer';
import Disclaimer from './Disclaimer';
import Calculator from './Calculator';

import HomeSearchLinks from '@/components/fluid/HomeSearchLinks';

import styles from './page.module.scss'

export default function Home() {
  
  return (
    <main className={styles.main}>
      <Header />
      <Calculator />
      <Disclaimer />

      {/* <HomeSearchLinks
        main_component_style={"main-component-white"}
        centered_style={"centered-content2"}
        /> */}

      <Footer />
    </main>
  )
}
