
import Header from './Header';
import Footer2 from '@/components/fluid/Footer2';
// import Disclaimer from './Disclaimer';
import Calculator from './Calculator';

import HomeSearchLinks from '@/components/fluid/HomeSearchLinks';

import styles from './page.module.scss'

export default function Home() {
  
  return (
    <main className={styles.main}>
      <Header />

      <Calculator />
 

      <HomeSearchLinks
        main_component_style={"main-component-white"}
        centered_style={"centered-content2"}
        />

      <Footer2 />
    </main>
  )
}
