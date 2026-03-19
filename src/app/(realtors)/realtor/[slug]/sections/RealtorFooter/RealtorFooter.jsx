/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import styles from './RealtorFooter.module.css'
import Link from 'next/link'

const RealtorFooter = () => {
  const aboutLinks = [
    { label: 'Company + Mission', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ]

  const mortgageLinks = [
    { label: "Today's rates", href: 'https://gethomeeasy.com/' },
    { label: 'Home loans', href: '/mortgage' },
    { label: 'Refinance', href: '/mortgage' }
  ]

  const helpLinks = [
    { label: 'FAQ', href: '/questions' },
    { label: 'Contact', href: '/contact' }
  ]

  const socialLinks = [
    { icon: 'fbFooter.svg', href: 'https://facebook.com/homeeasy', label: 'Facebook' },
    { icon: 'igFooter.svg', href: 'https://instagram.com/homeeasy', label: 'Instagram' },
    { icon: 'linkedinFooter.svg', href: 'https://linkedin.com/company/homeeasy', label: 'LinkedIn' }
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.upperFooter}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            {/* Logo and Social Media */}
            <div className={styles.logoSection}>
              <div className={styles.logoContainer}>
                <Image
                  src="/hehfooter.png"
                  alt="HomeEasy Homes"
                  width={160}
                  height={50}
                  className={styles.logo}
                />
              </div>
              <div className={styles.socialContainer}>
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={social.label}
                  >
                    <Image
                      src={`/${social.icon}`}
                      alt={social.label}
                      width={24}
                      height={24}
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Links Section */}
            <div className={styles.linksWrapper}>
              {/* About */}
              <div className={styles.linkGroup}>
                <h4 className={styles.linkGroupTitle}>About</h4>
                <ul className={styles.linkList}>
                  {aboutLinks.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mortgage */}
              <div className={styles.linkGroup}>
                <h4 className={styles.linkGroupTitle}>Mortgage</h4>
                <ul className={styles.linkList}>
                  {mortgageLinks.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Help Center */}
              <div className={styles.linkGroup}>
                <h4 className={styles.linkGroupTitle}>Help Center</h4>
                <ul className={styles.linkList}>
                  {helpLinks.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Footer */}
      <div className={styles.lowerFooter}>        
        {/* Disclaimers */}
        <div className={styles.disclaimers}>
          <div className={styles.container}>
            <div className={styles.disclaimerText}>
              <p>HomeEasy Homes © 2024. All Rights Reserved</p>
              <Link href="/electronic_consent" target="_blank" rel="noopener noreferrer">Electronic Consent </Link>
              <Link href="/tos" target="_blank" rel="noopener noreferrer">Terms &amp; Conditions of Use </Link>
              <Link href="/privacy_policy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link><br />
              <Link href="https://homeeasyhomes.com/files/TREC.pdf" target="_blank" rel="noopener noreferrer">TREC: Information About Brokerage Services </Link>
              <Link href="https://www.trec.texas.gov/forms/consumer-protection-notice" target="_blank" rel="noopener noreferrer">Consumer Protection Notice </Link><br /><br />
              <p>*Overall, the national average Realtor commission in 2023 was 5.46% according to data from <Link href="https://www.statista.com" target="_blank" rel="noopener noreferrer">Statista.com</Link></p>
              <p>**Average InstantOffer closes in 15 days. This does not guarantee that every sale will.</p>
              <p>1 The following offers are available only to clients who are purchasing a home and financing with Semper Home Loans, Inc.: (1) Client purchasing with a HomeEasy Homes Partner Agent through HomeEasy Homes will receive a lender paid credit that is 1.50% of their loan amount. For example, a $200,000 home purchase price minus a 5% down payment of $10,000 results in a loan amount of $190,000. Client would receive a credit of 1.50% of the $190,000, for a credit of $2,850 toward closing costs. (2) Client is referred by a real estate agent to buy a new home will not receive a lender paid credit. Offer does not apply to new loans submitted through an Executive Loan Officer, mortgage broker, through Schwab, or on non  agency jumbo loans, non-QM loans, bank statement loans, second lien products or team member loans. Offer may not be redeemed for cash and is nontransferable. Offer cannot be retroactively applied to loans where the rate has been locked. Conditions and exclusions apply. This is not a commitment to lend and is contingent on qualification per full underwriting guidelines.</p>
              <p>2 Save with HomeEasy Homes' lower 1% listing fee when you buy and sell with a Preferred HomeEasy Homes Agent, versus a more-typical 2.5% listing fee. Fees subject to change. 1% Listings is currently in Beta Testing. Only available in the following area codes 02760, 02763, 02761, 02056, 02070, 02093, and 02762.minimums apply . Buyer s agent fee not included.</p>
              <p>Apple and the Apple logo are trademarks of Apple Inc. registered in the U.S. and other countries. App Store is a service mark of Apple Inc.</p>
              <p>Wear OS by Google and Google Play are trademarks of Google LLC.</p>
              <p>Semper Home Loans, Inc., and HomeEasy Homes, LLC are separate operating subsidiaries of Semper Home Loans, Inc. Each company is a distinct legal entity, operated and managed through its own management and governance structure as necessitated by its state of incorporation and the relevant legal and regulatory requirements.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default RealtorFooter
