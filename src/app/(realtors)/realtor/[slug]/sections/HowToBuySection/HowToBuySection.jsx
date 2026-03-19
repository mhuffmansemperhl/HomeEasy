import React from 'react'
import Image from 'next/image'
import styles from './HowToBuySection.module.css'

const HowToBuySection = () => {
  const features = [
    {
      number: '1',
      title: 'Lower rates, lower payments, zero stress.',
      description: 'Our Preferred Lender makes home buying easier with instant pre-approvals, unbeatable rates and a smooth, hassle-free process.'
    },
    {
      number: '2',
      title: 'Instant access to listings.',
      description: 'Get the latest listings sent directly to your phone or email, keeping the real estate market at your fingertips.'
    },
    {
      number: '3',
      title: 'Who you work with matters.',
      description: 'Our Preferred Agents and Lenders can get you up to $10,000 toward closing costs.'
    }
  ]

  return (
    <section className={styles.howToBuySection}>
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
            <h2 className={styles.mainHeading}>How to buy & save, the <span style={{ fontStyle: "italic" }}>easy</span> way.</h2>

            <div className={styles.descriptionText}>
              <p>With HomeEasy Homes, buying a home is smooth, simple, and stress-free—less paperwork panic, more confidence, and a team that makes getting the keys feel great.</p>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/howto.png"
                alt="How to buy and save illustration"
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

export default HowToBuySection
