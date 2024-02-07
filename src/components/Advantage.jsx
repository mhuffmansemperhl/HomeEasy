"use client";

import { useRouter } from "next/navigation";
import styles from "./styles/Advantage.module.scss";
import { motion } from "framer-motion";
import ArrowButton from "./ArrowButton";
import useGoogleTagManager from "@/hooks/useGoogleTagManager";

const Advantage = () => {
  const router = useRouter();
  const [dataLayer, doEventClick, gtmPush] = useGoogleTagManager();

  return (
    <div>
      <div className={styles["main-component"]}>
        <div
          className={`${styles["advantage-content-container"]} centered-content`}
        >
          <div className={styles["advantage-content-title"]}>
            The HomeEasy advantage.
          </div>
          <div className={styles["advantage-content-copy"]}>
            Lower fees. Lower commission. Lower stress.
          </div>
          <div className={styles["advantage-content"]}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 2, delay: 0 }}
              viewport={{ once: true }}
              className={`${styles["advantage-content-item"]} ${styles["advantage-content-item0"]}`}
            >
              <div className={styles["advantage-content-item-image-holder"]}>
                {" "}
                <img src="/img/hand_home.png" alt="hand holding home" />
              </div>
              <div
                className={`${styles["advantage-content-item-card"]} ${styles["advantage-content-item-card0"]}`}
              >
                <div className={styles["advantage-content-item-card-title"]}>
                  It’s time to stop working with your mom’s cousin’s realtor
                  friend.
                </div>
                <div className={styles["advantage-content-item-card-copy"]}>
                  Our licensed agents are at the top of their game, work for
                  less commission, and committed to getting you home faster,
                  smarter, and easier.{" "}
                </div>
                <div
                  className={styles["advantage-content-item-get-started-link"]}
                >
                  <ArrowButton
                    link_text="Get started"
                    callback={() => {
                      // router.push('/get_started');
                      gtmPush([
                        "callback",
                        "home_advtg_get_started_1",
                        () => {
                          router.push(`/get_started`);
                        },
                      ]);
                    }}
                  />
                </div>
                {/* <div className={styles['advantage-content-item-card-link']}>
                                    <a onClick={() => router.push('/get_started')}>Get started</a>
                                </div> */}
              </div>
              <div
                className={`${styles["advantage-content-callout-items"]} ${styles["advantage-content-callout-items0"]}`}
              >
                <div className={styles["advantage-content-callout-item"]}>
                  <div
                    className={styles["advantage-content-callout-item-icon"]}
                  >
                    {" "}
                    <img src="/img/icon_connect.svg" alt="Connect" />{" "}
                  </div>
                  <div
                    className={styles["advantage-content-callout-item-title"]}
                  >
                    Connect
                    <div
                      className={
                        styles["advantage-content-callout-item-popover"]
                      }
                    >
                      We will match you with top local agents.
                    </div>
                  </div>
                </div>
                <div className={styles["advantage-content-callout-item"]}>
                  <div
                    className={styles["advantage-content-callout-item-icon"]}
                  >
                    {" "}
                    <img src="/img/icon_strategy.svg" alt="Strategy" />{" "}
                  </div>
                  <div
                    className={styles["advantage-content-callout-item-title"]}
                  >
                    Strategy
                    <div
                      className={
                        styles["advantage-content-callout-item-popover"]
                      }
                    >
                      Expert guidance and support to help you create a
                      personalized plan when buying or selling a house.
                    </div>
                  </div>
                </div>
                <div className={styles["advantage-content-callout-item"]}>
                  <div
                    className={styles["advantage-content-callout-item-icon"]}
                  >
                    {" "}
                    <img src="/img/icon_offer.svg" alt="Offer" />{" "}
                  </div>
                  <div
                    className={styles["advantage-content-callout-item-title"]}
                  >
                    Offer
                    <div
                      className={
                        styles["advantage-content-callout-item-popover"]
                      }
                    >
                      Our agents are experts in negotiation and can help you in
                      put together a competitive offer, even in the toughest
                      markets.
                    </div>
                  </div>
                </div>
                <div className={styles["advantage-content-callout-item"]}>
                  <div
                    className={styles["advantage-content-callout-item-icon"]}
                  >
                    {" "}
                    <img src="/img/icon_close.svg" alt="Close" />{" "}
                  </div>
                  <div
                    className={styles["advantage-content-callout-item-title"]}
                  >
                    Close
                    <div
                      className={
                        styles["advantage-content-callout-item-popover"]
                      }
                    >
                      Our streamlined process will have you closed in 30 days or
                      less
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 2, delay: 0 }}
              viewport={{ once: true }}
              className={`${styles["advantage-content-item"]} ${styles["advantage-content-item1"]}`}
            >
              <div className={styles["advantage-content-item-image-holder"]}>
                {" "}
                <img src="/img/white_board.png" alt="White Board" />
              </div>
              <div
                className={`${styles["advantage-content-item-card"]} ${styles["advantage-content-item-card1"]}`}
              >
                <div className={styles["advantage-content-item-card-title"]}>
                  Industry experts + AI-driven technology.
                </div>
                <div className={styles["advantage-content-item-card-copy"]}>
                  Combining our agent’s local expertise with advanced
                  data-driven tools, they will seamlessly guide you through the
                  entire process, ensuring a smooth and personalized experience.{" "}
                </div>
                <div
                  className={styles["advantage-content-item-get-started-link"]}
                >
                  <ArrowButton
                    link_text="Get started"
                    callback={() => {
                      // router.push('/get_started');
                      gtmPush([
                        "callback",
                        "home_advtg_get_started_2",
                        () => {
                          router.push(`/get_started`);
                        },
                      ]);
                    }}
                  />
                </div>

                {/* <div className={styles['advantage-content-item-card-link']}>
                                    <a onClick={() => router.push('/get_started')}>Get started</a>
                                </div> */}
              </div>
              <div
                className={`${styles["advantage-content-callout-items"]} ${styles["advantage-content-callout-items1"]}`}
              >
                <div className={styles["advantage-content-callout-item"]}>
                  <div
                    className={styles["advantage-content-callout-item-icon"]}
                  >
                    {" "}
                    <img
                      src="/img/icon_real_time_insights.svg"
                      alt="Real-time insights"
                    />{" "}
                  </div>
                  <div
                    className={styles["advantage-content-callout-item-title"]}
                  >
                    Real-time insights
                    <div
                      className={
                        styles["advantage-content-callout-item-popover"]
                      }
                    >
                      Continuously monitor market data, listings, and buyer
                      preferences.
                    </div>
                  </div>
                </div>
                <div className={styles["advantage-content-callout-item"]}>
                  <div
                    className={styles["advantage-content-callout-item-icon"]}
                  >
                    {" "}
                    <img
                      src="/img/icon_market_analysis.svg"
                      alt="Market analysis"
                    />{" "}
                  </div>
                  <div
                    className={styles["advantage-content-callout-item-title"]}
                  >
                    Market analysis
                    <div
                      className={
                        styles["advantage-content-callout-item-popover"]
                      }
                    >
                      {" "}
                      Utilize the power of AI to analyze numerous data points to
                      forecast market trends and opportunity.
                    </div>
                  </div>
                </div>
                <div className={styles["advantage-content-callout-item"]}>
                  <div
                    className={styles["advantage-content-callout-item-icon"]}
                  >
                    {" "}
                    <img
                      src="/img/icon_home_search.svg"
                      alt="Home search"
                    />{" "}
                  </div>
                  <div
                    className={styles["advantage-content-callout-item-title"]}
                  >
                    Home search
                    <div
                      className={
                        styles["advantage-content-callout-item-popover"]
                      }
                    >
                      Analyze your search patterns creating a more accurate
                      picture of what you really want.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 2, delay: 0 }}
              viewport={{ once: true }}
              className={`${styles["advantage-content-item"]} ${styles["advantage-content-item2"]}`}
            >
              <div className={styles["advantage-content-item-image-holder"]}>
                {" "}
                <img src="/img/piggie_bank.png" alt="piggie bank" />
              </div>
              <div
                className={`${styles["advantage-content-item-card"]} ${styles["advantage-content-item-card2"]}`}
              >
                <div className={styles["advantage-content-item-card-title"]}>
                  Fast, friction-free financing.
                </div>
                <div className={styles["advantage-content-item-card-copy"]}>
                  We have financing options that skip all of the BS in the
                  application process, getting you pre-approved and ready to
                  make an offer in minutes, not days.{" "}
                </div>
                <div
                  className={styles["advantage-content-item-get-started-link"]}
                >
                  <ArrowButton
                    link_text="Get started"
                    callback={() => {
                      // window.open("/booking", '_blank');
                      gtmPush([
                        "callback",
                        "home_advtg_get_started_3",
                        () => {
                        },
                      ]);
                      window.open("/booking", "_blank");

                      // router.push('/booking');
                    }}
                  />
                </div>

                {/* <div className={styles['advantage-content-item-card-link']}>
                                    <div className={styles['advantage-content-item-card-link-text']}>Get Started</div>
                                    <a onClick={() => router.push('/get_started')}>Get started</a>
                                </div> */}
                <div className={styles["advantage-content-item-card-subcopy"]}>
                  *Semper Home Loans is an affiliate of HomeEasy Homes. NMLS
                  1053. 225 Dupont Drive, Providence, RI, 02907. Any approval is
                  subject to Semper Home Loan’s underwriting criteria. This is
                  not a commitment to lend.
                </div>
              </div>
              <div
                className={`${styles["advantage-content-callout-items"]} ${styles["advantage-content-callout-items2"]}`}
              >
                <div className={styles["advantage-content-callout-item"]}>
                  <div
                    className={styles["advantage-content-callout-item-icon"]}
                  >
                    {" "}
                    <img
                      src="/img/icon_instant_cash_offer.svg"
                      alt="Instant cash offer"
                    />{" "}
                  </div>
                  <div
                    className={styles["advantage-content-callout-item-title"]}
                  >
                    Instant cash offer
                    <div
                      className={
                        styles["advantage-content-callout-item-popover"]
                      }
                    >
                      The fastest way to sell your home, easy.
                    </div>
                  </div>
                </div>
                <div className={styles["advantage-content-callout-item"]}>
                  <div
                    className={styles["advantage-content-callout-item-icon"]}
                  >
                    {" "}
                    <img
                      src="/img/icon_list_one_percent.png"
                      alt="List for 1%"
                    />{" "}
                  </div>
                  <div
                    className={styles["advantage-content-callout-item-title"]}
                  >
                    List for only 1%
                    <div
                      className={
                        styles["advantage-content-callout-item-popover"]
                      }
                    >
                      {" "}
                      Save thousands in commissions.
                    </div>
                  </div>
                </div>
                <div className={styles["advantage-content-callout-item"]}>
                  <div
                    className={styles["advantage-content-callout-item-icon"]}
                  >
                    {" "}
                    <img
                      src="/img/icon_buy_now_refi_later.svg"
                      alt="Buy Now Refi Later"
                    />{" "}
                  </div>
                  <div
                    className={styles["advantage-content-callout-item-title"]}
                  >
                    Buy now refi later
                    <div
                      className={
                        styles["advantage-content-callout-item-popover"]
                      }
                    >
                      Secure your home now, unlock even greater possibilities
                      later.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
