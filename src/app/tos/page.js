import Header from './Header';
import TOS from './TOS';
import Footer from '@/components/fluid/Footer';

import styles from './page.module.scss'

export default function Home() {
  
  return (
    <main className={styles.main}>
      <Header />
      <TOS />
      <Footer />
    </main>
  )
}
