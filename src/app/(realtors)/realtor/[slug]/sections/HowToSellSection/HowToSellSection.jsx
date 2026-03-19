/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import styles from './HowToSellSection.module.css'

const HowToSellSection = () => {
  const features = [
    {
      number: '1',
      title: 'With us, you have listing options.',
      description: 'Get an InstantOffer and skip staging, photos, open houses, inspections, and negotiations—sell in just 15 days**. Or list with us for only 1% and keep thousands compared to the average 5.46%* realtor fee.'
    },
    {
      number: '2',
      title: 'Talk to me!',
      description: 'Just take a few mins to fill us in on your home\'s details and your Preferred Agent will be there every step of the way, from contract to close.'
    },
    {
      number: '3',
      title: 'Close on your home with more money in your pocket!',
      description: 'Get the same full-service experience for thousands less—and maybe finally splurge on that new couch, dining set, or backyard grill you\'ve been eyeing!'
    }
  ]

  return (
    <section className={styles.howToSellSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.featuresContainer}>
            
            <div className={styles.featuresList}>
              {features.map((feature) => (
                <div key={feature.number} className={styles.featureItem}>
                  <div className={styles.featureNumber}>{feature.number}</div>
                  <div className={styles.featureContent}>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={styles.featureDescription}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.illustrationContainer}>
            <h2 className={styles.mainHeading}>How to sell & save, the <span style={{ fontStyle: "italic" }}>easy</span> way.</h2>

            <div className={styles.descriptionText}>
              <p>The traditional way of real estate is outdated. We've built something entirely new with lower fees, and lower stress, putting thousands in your pocket.</p>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/howtosell.png"
                alt="How to sell and save illustration"
                width={400}
                height={350}
                className={styles.illustration}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowToSellSection
