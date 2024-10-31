"use client";

import { useRouter } from "next/navigation";
import styles from "./styles/Advantage.module.scss";
import { motion } from "framer-motion";
import ArrowButton from "./ArrowButton";
import useGoogleTagManager from "@/hooks/useGoogleTagManager";
import BetaIcon from "@/compositions/BetaIcon";

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
                <img src="/img/hand_home.webp" alt="hand holding home" />
              </div>
              <div
                className={`${styles["advantage-content-item-card"]} ${styles["advantage-content-item-card0"]}`}
              >
                <div className={styles["advantage-content-item-card-title"]}>
                Buy a home the easy way and save up to $10,000
                </div>
                <div className={styles["advantage-content-item-card-copy"]}>
                Find your dream home with one of our Preferred Agents and get
                1.5% of the loan amount back in closing credit, up to $10,000<sup>1</sup>{" "}
                from our Preferred Lender.{" "}
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
                    Get Pre-approved
                    <div
                      className={
                        styles["advantage-content-callout-item-popover"]
                      }
                    >
                      They are our Preferred Lender for a reason - their low rates are hard to beat!
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
                    Find Your Dream home
                    <div
                      className={
                        styles["advantage-content-callout-item-popover"]
                      }
                    >
                     Get matched with a Preferred Agent and find your dream home!
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
                    Get money back
                    <div
                      className={
                        styles["advantage-content-callout-item-popover"]
                      }
                    >
                      Get 1.5% of the loan amount back in closing credit, up to $10,000 from our Preferred Lender<sup>1</sup>.
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
                    Time to celebrate
                    <div
                      className={
                        styles["advantage-content-callout-item-popover"]
                      }
                    >
                      High-five! You found your dream home and saved thousands of dollars!
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
                <img src="/img/white_board.webp" alt="White Board" />
              </div>
              <div
                className={`${styles["advantage-content-item-card"]} ${styles["advantage-content-item-card1"]}`}
              >
                <BetaIcon containerSx={{ marginBottom: "36px" }} imgSx={{width: "48px"}} popupSx={{zIndex: "100"}} />
                <div className={styles["advantage-content-item-card-title"]}>
                Sell your home instantly for cash or list it for only 1%.
                </div>
                <div className={styles["advantage-content-item-card-copy"]}>
                Sell your home with one of our Preferred Agents and save! Sell your
                home instantly for cash avoiding listing and closing fees, or list with us for
                only 1% (compared to the average  5.46%*)!{" "}
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
                      src="/img/icon_instant_cash_offer.svg"
                      alt="Instant cash offer"
                    />{" "}
                  </div>
                  <div
                    className={styles["advantage-content-callout-item-title"]}
                  >
                    Receive an instant offer
                    <div
                      className={
                        styles["advantage-content-callout-item-popover"]
                      }
                    >
                       No staging, no photos, no open house, no inspections, no negotiating, no time wasted. Done in 15 days**.
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
                    List your home for 1%
                    <div
                      className={
                        styles["advantage-content-callout-item-popover"]
                      }
                    >
                      {" "}
                      Don’t want an InstantOffer? Why pay the avg. 5.46%* listing fee to a realtor? List your home for only 1%<sup>2</sup>, keeping thousands in your pocket.
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
                    Save thousands
                    <div
                      className={
                        styles["advantage-content-callout-item-popover"]
                      }
                    >
                       Our listing fee is just 1%<sup>2</sup> helping our average seller cut costs by 50% on commissions and fees. Get the same full-service experience for thousands less!
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
                <img src="/img/piggie_bank.webp" alt="piggie bank" />
              </div>
              <div
                className={`${styles["advantage-content-item-card"]} ${styles["advantage-content-item-card2"]}`}
              >
                <div className={styles["advantage-content-item-card-title"]}>
                The best of both worlds! Buy, sell,
                & save thousands - the easy way.
                </div>
                <div className={styles["advantage-content-item-card-copy"]}>
                Sell for cash instantly or list for less with one of our Preferred
                Agents. Want to save more? Receive 1.5% of the loan amount
                back in closing credit, up to $10,000 from our Preferred Lender<sup>1</sup>.{" "}
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
                      No staging, no photos, no open house, no inspections, no negotiating, no time wasted. Done in 15 days**.
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
                      Don’t want an InstantOffer? Why pay the avg. 5.46%* listing fee to a realtor? List your home for only 1%<sup>2</sup>, keeping thousands in your pocket.
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
                    Find your dream home
                    <div
                      className={
                        styles["advantage-content-callout-item-popover"]
                      }
                    >
                      Our Preferred Agent will also help you find your dream home!
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
                    Receive 1.5% back<sup>1</sup>
                    <div
                      className={
                        styles["advantage-content-callout-item-popover"]
                      }
                    >
                     Bundle for savings. Get 1.5% of the loan amount back in closing credit, up to $10,000 from our Preferred Lender<sup>1</sup>.
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
