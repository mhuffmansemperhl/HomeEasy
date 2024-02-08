// import Header from '../components/Header';
// import Testamonials from '../components/Testamonials';
// import Advantage from '../components/Advantage';
// import Difference from '../components/Difference';
import Searchbar_inner from './Searchbar_inner';
// import Questions from '../components/Questions';
// import Plan from '../components/Plan';
// import GettingStarted from '../components/GettingStarted';
import Header from './Header';
import Footer from '../../components/fluid/Footer';

import styles from './page.module.scss';

export default function Home() {
  
  return (
    <main className={styles.main}>
      <Header />
  <Searchbar_inner/>

      {/* <Footer /> */}
    </main>
  )
}
