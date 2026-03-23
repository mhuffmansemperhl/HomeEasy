/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useState, useEffect } from 'react'
import { NumericFormat } from 'react-number-format'
import styles from './RealtorCalculator.module.css'

const STATE_INFO = [
  ["Select State", "XX", "0.00"],
  ["Alabama", "AL", "0.41"],
  ["Alaska", "AK", "1.22"],
  ["Arizona", "AZ", "0.62"],
  ["Arkansas", "AR", "0.62"],
  ["California", "CA", "0.75"],
  ["Colorado", "CO", "0.51"],
  ["Connecticut", "CT", "2.15"],
  ["Delaware", "DE", "0.58"],
  ["District of Columbia", "DC", "0.57"],
  ["Florida", "FL", "0.86"],
  ["Georgia", "GA", "0.90"],
  ["Hawaii", "HI", "0.29"],
  ["Idaho", "ID", "0.63"],
  ["Illinois", "IL", "2.23"],
  ["Indiana", "IN", "0.83"],
  ["Iowa", "IA", "1.57"],
  ["Kansas", "KS", "1.43"],
  ["Kentucky", "KY", "0.85"],
  ["Louisiana", "LA", "0.56"],
  ["Maine", "ME", "1.28"],
  ["Maryland", "MD", "1.07"],
  ["Massachusetts", "MA", "1.20"],
  ["Michigan", "MI", "1.48"],
  ["Minnesota", "MN", "1.11"],
  ["Mississippi", "MS", "0.79"],
  ["Missouri", "MO", "0.98"],
  ["Montana", "MT", "0.83"],
  ["Nebraska", "NE", "1.67"],
  ["Nevada", "NV", "0.55"],
  ["New Hampshire", "NH", "2.09"],
  ["New Jersey", "NJ", "2.47"],
  ["New Mexico", "NM", "0.80"],
  ["New York", "NY", "1.73"],
  ["North Carolina", "NC", "0.80"],
  ["North Dakota", "ND", "1.00"],
  ["Ohio", "OH", "1.53"],
  ["Oklahoma", "OK", "0.90"],
  ["Oregon", "OR", "0.93"],
  ["Pennsylvania", "PA", "1.53"],
  ["Rhode Island", "RI", "1.53"],
  ["South Carolina", "SC", "0.56"],
  ["South Dakota", "SD", "1.24"],
  ["Tennessee", "TN", "0.66"],
  ["Texas", "TX", "1.74"],
  ["Utah", "UT", "0.58"],
  ["Vermont", "VT", "1.90"],
  ["Virginia", "VA", "0.82"],
  ["Washington", "WA", "0.94"],
  ["West Virginia", "WV", "0.59"],
  ["Wisconsin", "WI", "1.73"],
  ["Wyoming", "WY", "0.61"]
]

const RealtorCalculator = () => {
  // Net Proceeds Tab State
  const [sellingPrice, setSellingPrice] = useState(600000)
  const [mortgageBalance, setMortgageBalance] = useState(400000)
  const [agentFees, setAgentFees] = useState(18000)
  const [sellerConcessions, setSellerConcessions] = useState(0)
  const [homeRepairs, setHomeRepairs] = useState(0)
  const [movingCosts, setMovingCosts] = useState(0)
  const [netProceeds, setNetProceeds] = useState(0)
  const [totalCostsToSell, setTotalCostsToSell] = useState(0)

  // Monthly Payments Tab State
  const [activeTab, setActiveTab] = useState('proceeds')
  const [location, setLocation] = useState('XX')
  const [purchasePrice, setPurchasePrice] = useState(500000)
  const [downPaymentPercent, setDownPaymentPercent] = useState(20)
  const [downPaymentAmount, setDownPaymentAmount] = useState(100000)
  const [mortgageType, setMortgageType] = useState('30-year fixed')
  const [interestRate, setInterestRate] = useState(7.09)
  const [propertyTax, setPropertyTax] = useState(0)
  const [homeInsurance, setHomeInsurance] = useState(900)
  const [hoaFees, setHoaFees] = useState(0)
  
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [monthlyPrincipalInterest, setMonthlyPrincipalInterest] = useState(0)
  const [monthlyPropertyTax, setMonthlyPropertyTax] = useState(0)
  const [monthlyInsurance, setMonthlyInsurance] = useState(0)
  const [monthlyHoaFees, setMonthlyHoaFees] = useState(0)
  const [chartStyle, setChartStyle] = useState({})
  const [showDisclaimerModal, setShowDisclaimerModal] = useState(false)
  const [showPaymentsDisclaimerModal, setShowPaymentsDisclaimerModal] = useState(false)

  // Calculate net proceeds whenever inputs change
  useEffect(() => {
    const calculated = sellingPrice - mortgageBalance - agentFees - sellerConcessions - homeRepairs - movingCosts
    const totalCosts = agentFees + sellerConcessions + homeRepairs + movingCosts
    
    setNetProceeds(calculated)
    setTotalCostsToSell(totalCosts)
  }, [sellingPrice, mortgageBalance, agentFees, sellerConcessions, homeRepairs, movingCosts])

  // Calculate monthly payments whenever inputs change
  useEffect(() => {
    const mpt = propertyTax / 12
    const mi = homeInsurance / 12
    const mhf = hoaFees

    setMonthlyPropertyTax(mpt)
    setMonthlyInsurance(mi)
    setMonthlyHoaFees(mhf)

    const loanAmount = purchasePrice - downPaymentAmount
    const monthlyRate = interestRate / 100 / 12
    const numPayments = 360

    let monthlyPI = 0
    if (monthlyRate > 0) {
      monthlyPI = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1)
    } else {
      monthlyPI = loanAmount / numPayments
    }

    setMonthlyPrincipalInterest(monthlyPI)

    const totalMonthly = monthlyPI + mpt + mi + mhf
    setMonthlyPayment(totalMonthly)

    setChartStyle({
      gridTemplateColumns: `${monthlyPI}fr ${mpt}fr ${mi}fr ${mhf}fr`
    })
  }, [purchasePrice, downPaymentAmount, interestRate, propertyTax, homeInsurance, hoaFees])

  // Update down payment amount when percent or purchase price changes
  useEffect(() => {
    const newDownPaymentAmount = (downPaymentPercent / 100) * purchasePrice
    setDownPaymentAmount(newDownPaymentAmount)
  }, [purchasePrice, downPaymentPercent])

  // Update property tax based on location
  useEffect(() => {
    const stateInfo = STATE_INFO.find(state => state[1] === location)
    if (stateInfo) {
      const taxRate = parseFloat(stateInfo[2])
      const calculatedTax = purchasePrice * (taxRate / 100)
      setPropertyTax(calculatedTax)
    }
  }, [purchasePrice, location])

  const formatCurrency = (value) => {
    return `$${value.toLocaleString('en-US', { maximumFractionDigits: 0 })}`
  }

  const handleSellingPriceChange = (values) => {
    setSellingPrice(values.floatValue || 0)
  }

  const handleMortgageBalanceChange = (values) => {
    setMortgageBalance(values.floatValue || 0)
  }

  const handleAgentFeesChange = (values) => {
    setAgentFees(values.floatValue || 0)
  }

  const handleSellerConcessionsChange = (values) => {
    setSellerConcessions(values.floatValue || 0)
  }

  const handleHomeRepairsChange = (values) => {
    setHomeRepairs(values.floatValue || 0)
  }

  const handleMovingCostsChange = (values) => {
    setMovingCosts(values.floatValue || 0)
  }

  const handleLocationChange = (e) => {
    setLocation(e.target.value)
  }

  const handlePurchasePriceChange = (values) => {
    setPurchasePrice(values.floatValue || 0)
  }

  const handleDownPaymentPercentChange = (values) => {
    const newPercent = Math.min(values.floatValue || 0, 100)
    setDownPaymentPercent(newPercent)
  }

  const handleDownPaymentAmountChange = (values) => {
    const newAmount = values.floatValue || 0
    setDownPaymentAmount(newAmount)
    const newPercent = (newAmount / purchasePrice) * 100
    setDownPaymentPercent(Math.min(newPercent, 100))
  }

  const handleInterestRateChange = (values) => {
    setInterestRate(values.floatValue || 0)
  }

  const handlePropertyTaxChange = (values) => {
    setPropertyTax(values.floatValue || 0)
  }

  const handleHomeInsuranceChange = (values) => {
    setHomeInsurance(values.floatValue || 0)
  }

  const handleHoaFeesChange = (values) => {
    setHoaFees(values.floatValue || 0)
  }

  return (
    <section className={styles.calculatorSection}>
      <div className={styles.container}>
        <h2 className={styles.mainHeading}>Your money's new happy place.</h2>

        <div className={styles.buttonGroup}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'proceeds' ? styles.tabButtonActive : ''}`}
            onClick={() => setActiveTab('proceeds')}
          >
            Net Proceeds
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'payments' ? styles.tabButtonActive : ''}`}
            onClick={() => setActiveTab('payments')}
          >
            Est. Monthly Payments
          </button>
        </div>

        <p className={styles.description}>
          {activeTab === 'proceeds' 
            ? "So, how much money can you make selling your house? Remember, before you celebrate your profit, it's crucial to consider certain costs involved in the process. Let us help you figure it all out!"
            : "Let's find the perfect balance between your dream house and your ideal budget. We'll break down the numbers, explore your options, and make sure every decision feels like the right one—for your lifestyle and your wallet."
          }
        </p>

        <div className={styles.contentWrapper}>
          {activeTab === 'proceeds' ? (
            <>
              <div className={styles.inputSection}>
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>
                    Estimated Selling Price
                    <span className={styles.helpText}>
                      Not sure? <a href="/search-listing">Get a FREE estimate from us</a>
                    </span>
                  </label>
                  <div className={styles.inputWrapper}>
                    <span className={styles.currencySymbol}>$</span>
                    <NumericFormat
                      value={sellingPrice}
                      onValueChange={handleSellingPriceChange}
                      thousandSeparator=","
                      decimalScale={2}
                      fixedDecimalScale
                      placeholder="0"
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Mortgage balance</label>
                  <div className={styles.inputWrapper}>
                    <span className={styles.currencySymbol}>$</span>
                    <NumericFormat
                      value={mortgageBalance}
                      onValueChange={handleMortgageBalanceChange}
                      thousandSeparator=","
                      decimalScale={2}
                      fixedDecimalScale
                      placeholder="0"
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Agent fees</label>
                  <div className={styles.inputWrapper}>
                    <span className={styles.currencySymbol}>$</span>
                    <NumericFormat
                      value={agentFees}
                      onValueChange={handleAgentFeesChange}
                      thousandSeparator=","
                      decimalScale={2}
                      fixedDecimalScale
                      placeholder="0"
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Seller concessions</label>
                  <div className={styles.inputWrapper}>
                    <span className={styles.currencySymbol}>$</span>
                    <NumericFormat
                      value={sellerConcessions}
                      onValueChange={handleSellerConcessionsChange}
                      thousandSeparator=","
                      decimalScale={2}
                      fixedDecimalScale
                      placeholder="0"
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Home prep & repairs</label>
                  <div className={styles.inputWrapper}>
                    <span className={styles.currencySymbol}>$</span>
                    <NumericFormat
                      value={homeRepairs}
                      onValueChange={handleHomeRepairsChange}
                      thousandSeparator=","
                      decimalScale={2}
                      fixedDecimalScale
                      placeholder="0"
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Moving costs</label>
                  <div className={styles.inputWrapper}>
                    <span className={styles.currencySymbol}>$</span>
                    <NumericFormat
                      value={movingCosts}
                      onValueChange={handleMovingCostsChange}
                      thousandSeparator=","
                      decimalScale={2}
                      fixedDecimalScale
                      placeholder="0"
                      className={styles.input}
                    />
                  </div>
                </div>

                <button 
                  onClick={() => setShowDisclaimerModal(true)}
                  className={styles.disclaimerLink}
                >
                  Calculator Disclaimer
                </button>
              </div>

              <div className={styles.resultsSection}>
                <div className={styles.resultsCard}>
                  <p className={styles.resultsLabel}>Your estimated net proceeds</p>
                  <h3 className={styles.resultsAmount}>
                    {formatCurrency(netProceeds)}
                  </h3>
                  <div className={styles.resultsDivider}></div>
                  
                  <div className={styles.resultDetail}>
                    <span className={styles.resultDetailLabel}>Estimated selling price</span>
                    <span className={styles.resultDetailValue}>{formatCurrency(sellingPrice)}</span>
                  </div>
                  
                  <div className={styles.resultDetail}>
                    <span className={styles.resultDetailLabel}>Total costs to sell</span>
                    <span className={styles.resultDetailValue}>{formatCurrency(totalCostsToSell)}</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={styles.inputSection}>
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Location</label>

                    <div className={styles.inputWrapper}>
                        <select 
                            value={location} 
                            onChange={handleLocationChange}
                            className={styles.select}
                            >
                            {STATE_INFO.map((state) => (
                            <option key={state[1]} value={state[1]}>
                                {state[0]}
                            </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Purchase price</label>
                  <div className={styles.inputWrapper}>
                    <span className={styles.currencySymbol}>$</span>
                    <NumericFormat
                      value={purchasePrice}
                      onValueChange={handlePurchasePriceChange}
                      thousandSeparator=","
                      decimalScale={2}
                      fixedDecimalScale
                      placeholder="0"
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Down payment</label>
                  <div className={styles.dualInputGroup}>
                    <div className={styles.dualInputItem}>
                      <div className={styles.inputWrapper}>
                        <span className={styles.unitSymbol}>%</span>
                        <NumericFormat
                          value={downPaymentPercent}
                          onValueChange={handleDownPaymentPercentChange}
                          decimalScale={2}
                          fixedDecimalScale
                          placeholder="0"
                          className={styles.input}
                        />
                      </div>
                    </div>
                    <div className={styles.dualInputItem}>
                      <div className={styles.inputWrapper}>
                        <span className={styles.currencySymbol}>$</span>
                        <NumericFormat
                          value={downPaymentAmount}
                          onValueChange={handleDownPaymentAmountChange}
                          thousandSeparator=","
                          decimalScale={2}
                          fixedDecimalScale
                          placeholder="0"
                          className={styles.input}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Mortgage type</label>
                  <div className={styles.inputWrapper}> 
                  <select 
                    value={mortgageType}
                    onChange={(e) => setMortgageType(e.target.value)}
                    className={styles.select}
                  >
                    <option>30-year fixed</option>
                    <option>15-year fixed</option>
                  </select>

                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Estimated interest rate</label>
                  <div className={styles.inputWrapper}>
                    <span className={styles.unitSymbol}>%</span>
                    <NumericFormat
                      value={interestRate}
                      onValueChange={handleInterestRateChange}
                      decimalScale={2}
                      fixedDecimalScale
                      placeholder="0"
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Property taxes (annual)</label>
                  <div className={styles.inputWrapper}>
                    <span className={styles.currencySymbol}>$</span>
                    <NumericFormat
                      value={propertyTax}
                      onValueChange={handlePropertyTaxChange}
                      thousandSeparator=","
                      decimalScale={2}
                      fixedDecimalScale
                      placeholder="0"
                      className={styles.input}
                    />
                    <span className={styles.unitLabel}>/year</span>
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Home insurance (annual)</label>
                  <div className={styles.inputWrapper}>
                    <span className={styles.currencySymbol}>$</span>
                    <NumericFormat
                      value={homeInsurance}
                      onValueChange={handleHomeInsuranceChange}
                      thousandSeparator=","
                      decimalScale={2}
                      fixedDecimalScale
                      placeholder="0"
                      className={styles.input}
                    />
                    <span className={styles.unitLabel}>/year</span>
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>HOA fees (monthly)</label>
                  <div className={styles.inputWrapper}>
                    <span className={styles.currencySymbol}>$</span>
                    <NumericFormat
                      value={hoaFees}
                      onValueChange={handleHoaFeesChange}
                      thousandSeparator=","
                      decimalScale={2}
                      fixedDecimalScale
                      placeholder="0"
                      className={styles.input}
                    />
                    <span className={styles.unitLabel}>/month</span>
                  </div>
                </div>

                <button 
                  onClick={() => setShowPaymentsDisclaimerModal(true)}
                  className={styles.disclaimerLink}
                >
                  Calculator Disclaimer
                </button>
              </div>

              <div className={styles.resultsSection}>
                <div className={styles.resultsCard}>
                  <p className={styles.resultsLabel}>Your Estimated Monthly Payment</p>
                  <h3 className={styles.resultsAmount}>
                    {formatCurrency(monthlyPayment)}
                  </h3>
                  
                  <div className={styles.paymentChart} style={chartStyle}>
                    <div className={styles.chartSegment} style={{ backgroundColor: '#fff' }}></div>
                    <div className={styles.chartSegment} style={{ backgroundColor: '#00a8e8' }}></div>
                    <div className={styles.chartSegment} style={{ backgroundColor: '#d22730' }}></div>
                    <div className={styles.chartSegment} style={{ backgroundColor: '#b0a8d8' }}></div>
                  </div>

                  <div className={styles.paymentBreakdown}>
                    <div className={styles.breakdownItem}>
                      <div className={styles.breakdownDot} style={{ backgroundColor: '#fff' }}></div>
                      <span className={styles.breakdownLabel}>Estimated Principle & Interest</span>
                      <span className={styles.breakdownValue}>{formatCurrency(monthlyPrincipalInterest)}</span>
                    </div>
                    <div className={styles.breakdownItem}>
                      <div className={styles.breakdownDot} style={{ backgroundColor: '#00a8e8' }}></div>
                      <span className={styles.breakdownLabel}>Estimated Home Insurance</span>
                      <span className={styles.breakdownValue}>{formatCurrency(monthlyInsurance)}</span>
                    </div>
                    <div className={styles.breakdownItem}>
                      <div className={styles.breakdownDot} style={{ backgroundColor: '#d22730' }}></div>
                      <span className={styles.breakdownLabel}>Estimated Property Tax</span>
                      <span className={styles.breakdownValue}>{formatCurrency(monthlyPropertyTax)}</span>
                    </div>
                    <div className={styles.breakdownItem}>
                      <div className={styles.breakdownDot} style={{ backgroundColor: '#b0a8d8' }}></div>
                      <span className={styles.breakdownLabel}>Estimated HOA</span>
                      <span className={styles.breakdownValue}>{formatCurrency(monthlyHoaFees)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {showDisclaimerModal && (
          <div className={styles.modalOverlay} onClick={() => setShowDisclaimerModal(false)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modalHeader}>
                <h2>Calculator Disclaimer</h2>
                <button 
                  className={styles.modalCloseButton}
                  onClick={() => setShowDisclaimerModal(false)}
                  aria-label="Close modal"
                >
                  ×
                </button>
              </div>
              <div className={styles.modalBody}>
                <p>This calculator is offered for educational purposes only. All costs are estimates and no guarantee is made that all possible costs have been included. This calculator does not replace a professional estimate.</p>
              </div>
              
            </div>
          </div>
        )}

        {showPaymentsDisclaimerModal && (
          <div className={styles.modalOverlay} onClick={() => setShowPaymentsDisclaimerModal(false)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modalHeader}>
                <h2>Calculator Disclaimer</h2>
                <button 
                  className={styles.modalCloseButton}
                  onClick={() => setShowPaymentsDisclaimerModal(false)}
                  aria-label="Close modal"
                >
                  ×
                </button>
              </div>
              <div className={styles.modalBody}>
                <p>Our calculators are intended to be used for educational purposes only. Actual available rates and monthly payment amounts are subject to market fluctuations and will depend on a number of factors, including geography and loan characteristics. The estimates are based on information you provide, and may not include other fees and costs that a lender may assess in addition to monthly principal and interest, such as taxes and insurance and the actual payment obligation may be greater. This is not a commitment to lend with Semper Home Loans.</p>
              </div>
              
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default RealtorCalculator
