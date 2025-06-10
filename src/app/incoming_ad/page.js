import React from 'react'
import styles from './page.module.scss'
import Header from './Header'
import Footer from '@/components/fluid/Footer'

const page = () => {
  return (
     <main className={styles.main}>
      <Header />
      <Footer />
     </main>
  )
}

export default page