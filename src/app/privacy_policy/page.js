import Header from './Header';
import Privacy from './Privacy';
import Footer from '@/components/fluid/Footer';

import styles from './page.module.scss'

export default function Home() {
  
  return (
    <main className={styles.main}>
      <Header />
      <Privacy />
      <Footer />
    </main>
  )
}
