"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import styles from "./styles/Destress.module.scss";
import useWindowSize from "@/hooks/useWindowSize";
import { motion } from "framer-motion";
import ArrowButton from "./ArrowButton";
import useGoogleTagManager from "@/hooks/useGoogleTagManager";

const Destress = () => {
  const windowSize = useWindowSize();
  const router = useRouter();
  const [dataLayer, doEventClick, gtmPush] = useGoogleTagManager();

  // const imageUrls = ["/img/sell_image.png", "/img/buy_image.png", "/img/buy_sell_image.png"];
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    // setTimeout(() => {
    //     setSelectedIndex(1);
    //  }, 5000);
    //  setTimeout(() => {
    //     setSelectedIndex(2);
    //  }, 10000);
  }, []);

  function changeIndex(idx) {
    setSelectedIndex(idx);
  }

  function doGetStarted() {
    switch (selectedIndex) {
      case 0:
        router.push("/get_started?flow=sell&step=1");
        break;
      case 1:
        router.push("/get_started?flow=buy&step=1");
        break;
      case 2:
        router.push("/get_started?flow=sellbuy&step=1");
        break;
    }
  }

  return (
    <div>
      <div className={styles["main-component"]}>
        <div
          className={`${styles["transparentprocess-content-container"]} centered-content`}
        >
          {windowSize.width > 1023 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 2, delay: 0 }}
              viewport={{ once: true }}
              className={`${
                selectedIndex === 0
                  ? styles["transparentprocess-content-image-holder0"]
                  : ""
              } ${
                selectedIndex === 1
                  ? styles["transparentprocess-content-image-holder2"]
                  : ""
              } ${
                selectedIndex === 2
                  ? styles["transparentprocess-content-image-holder3"]
                  : ""
              }`}
            ></motion.div>
          )}
          {windowSize.width < 1024 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 2, delay: 0 }}
              viewport={{ once: true }}
              className={`${
                selectedIndex === 0
                  ? styles["transparentprocess-content-image-holder0"]
                  : ""
              } ${
                selectedIndex === 1
                  ? styles["transparentprocess-content-image-holder2"]
                  : ""
              } ${
                selectedIndex === 2
                  ? styles["transparentprocess-content-image-holder3"]
                  : ""
              }`}
            ></motion.div>
          )}

          <div className={styles["transparentprocess-content-tabs-holder"]}>
            <div className={styles["transparentprocess-content-tabs-title"]}>
              We de-stress the process.
            </div>
            <div className={styles["transparentprocess-content-tabs-tabs"]}>
              <div
                onClick={() => {
                  gtmPush([
                    "callback",
                    "home_destress_sell",
                    () => {
                      changeIndex(0);
                    },
                  ]);
                }}
                className={`${styles["transparentprocess-content-tabs-tab"]} ${
                  selectedIndex === 0
                    ? styles["transparentprocess-content-tabs-tab-selected"]
                    : ""
                }`}
              >
                Sell
              </div>
              <div
                onClick={() => {
                  // changeIndex(1);
                  gtmPush([
                    "callback",
                    "home_destress_buy",
                    () => {
                      changeIndex(1);
                    },
                  ]);
                }}
                className={`${styles["transparentprocess-content-tabs-tab"]} ${
                  selectedIndex === 1
                    ? styles["transparentprocess-content-tabs-tab-selected"]
                    : ""
                }`}
              >
                Buy
              </div>
              <div
                onClick={() => {
                  // changeIndex(2);
                  gtmPush([
                    "callback",
                    "home_destress_buy_sell",
                    () => {
                      changeIndex(2);
                    },
                  ]);
                }}
                className={`${styles["transparentprocess-content-tabs-tab"]} ${
                  selectedIndex === 2
                    ? styles["transparentprocess-content-tabs-tab-selected"]
                    : ""
                }`}
              >
                Buy &amp; Sell
              </div>
            </div>
            <div className={styles["transparentprocess-content-tabs-content"]}>
              {selectedIndex === 1 && (
                <div
                  className={
                    styles["transparentprocess-content-tabs-content-item"]
                  }
                >
                  <div
                    className={
                      styles[
                        "transparentprocess-content-tabs-content-item-title"
                      ]
                    }
                  >
                    1. Get matched with the best agent.
                  </div>
                  <div
                    className={
                      styles[
                        "transparentprocess-content-tabs-content-item-copy"
                      ]
                    }
                  >
                    Gone are the days of resorting to work with your mom’s cousin’s realtor
                    friend. Get matched with one of our vetted Preferred Agents.
                  </div>
                </div>
              )}
              {selectedIndex === 1 && (
                <div
                  className={
                    styles["transparentprocess-content-tabs-content-item"]
                  }
                >
                  <div
                    className={
                      styles[
                        "transparentprocess-content-tabs-content-item-title"
                      ]
                    }
                  >
                    2. Fast, friction-free financing
                  </div>
                  <div
                    className={
                      styles[
                        "transparentprocess-content-tabs-content-item-copy"
                      ]
                    }
                  >
                    Get pre-approved with our Preferred Lender and ready to make an offer in
                    minutes, not days.
                  </div>
                </div>
              )}
              {selectedIndex === 1 && (
                <div
                  className={
                    styles["transparentprocess-content-tabs-content-item"]
                  }
                >
                  <div
                    className={
                      styles[
                        "transparentprocess-content-tabs-content-item-title"
                      ]
                    }
                  >
                    3. Find your dream home.
                  </div>
                  <div
                    className={
                      styles[
                        "transparentprocess-content-tabs-content-item-copy"
                      ]
                    }
                  >
                    With instant access to new listings, you will be alerted the moment a home
                    with your wants and needs hits the market.
                  </div>
                </div>
              )}
              {selectedIndex === 1 && (
                <div
                  className={
                    styles["transparentprocess-content-tabs-content-item"]
                  }
                >
                  <div
                    className={
                      styles[
                        "transparentprocess-content-tabs-content-item-title"
                      ]
                    }
                  >
                    4. Save thousands<sup>1</sup>.
                  </div>
                  <div
                    className={
                      styles[
                        "transparentprocess-content-tabs-content-item-copy"
                      ]
                    }
                  >
                    Lower payments, lower fees, and lower rates with our Preferred Lender.
                    Plus get 1.5% of the loan amount back in closing credit, up to $10,000!
                  </div>
                </div>
              )}
              {selectedIndex === 0 && (
                <div
                  className={
                    styles["transparentprocess-content-tabs-content-item"]
                  }
                >
                  <div
                    className={
                      styles[
                        "transparentprocess-content-tabs-content-item-title"
                      ]
                    }
                  >
                    1. My house is worth what?!
                  </div>
                  <div
                    className={
                      styles[
                        "transparentprocess-content-tabs-content-item-copy"
                      ]
                    }
                  >
                    Use our free home value calculator to instantly see your
                    home’s current value.
                  </div>
                </div>
              )}
              {selectedIndex === 0 && (
                <div
                  className={
                    styles["transparentprocess-content-tabs-content-item"]
                  }
                >
                  <div
                    className={
                      styles[
                        "transparentprocess-content-tabs-content-item-title"
                      ]
                    }
                  >
                    2. Get matched with the best Agent.
                  </div>
                  <div
                    className={
                      styles[
                        "transparentprocess-content-tabs-content-item-copy"
                      ]
                    }
                  >
                    Gone are the days of resorting to work with your mom’s cousin’s realtor
                    friend. Get matched with one of our Preferred Agents and save.
                  </div>
                </div>
              )}
              {selectedIndex === 0 && (
                <div
                  className={
                    styles["transparentprocess-content-tabs-content-item"]
                  }
                >
                  <div
                    className={
                      styles[
                        "transparentprocess-content-tabs-content-item-title"
                      ]
                    }
                  >
                    3. Get an instant cash offer.
                  </div>
                  <div
                    className={
                      styles[
                        "transparentprocess-content-tabs-content-item-copy"
                      ]
                    }
                  >
                    No staging, no photos, no open house, no inspections, no negotiating, no
                    time wasted. Done in 15 days**.
                  </div>
                </div>
              )}
              {selectedIndex === 0 && (
                <div
                  className={
                    styles["transparentprocess-content-tabs-content-item"]
                  }
                >
                  <div
                    className={
                      styles[
                        "transparentprocess-content-tabs-content-item-title"
                      ]
                    }
                  >
                    4. Or list with us for only 1%<sup>2</sup>.
                  </div>
                  <div
                    className={
                      styles[
                        "transparentprocess-content-tabs-content-item-copy"
                      ]
                    }
                  >
                    Our Preferred Agents will list your property, capture beautiful photos, and
                    host a single open house for only 1% listing fee, saving you thousands.
                  </div>
                </div>
              )}
              {selectedIndex === 2 && (
                <div
                  className={
                    styles["transparentprocess-content-tabs-content-item"]
                  }
                >
                  <div
                    className={
                      styles[
                        "transparentprocess-content-tabs-content-item-title"
                      ]
                    }
                  >
                    1. Get matched with the best Agent.
                  </div>
                  <div
                    className={
                      styles[
                        "transparentprocess-content-tabs-content-item-copy"
                      ]
                    }
                  >
                    Gone are the days of resorting to work with your mom’s
                    cousin’s realtor friend.
                  </div>
                </div>
              )}
              {selectedIndex === 2 && (
                <div
                  className={
                    styles["transparentprocess-content-tabs-content-item"]
                  }
                >
                  <div
                    className={
                      styles[
                        "transparentprocess-content-tabs-content-item-title"
                      ]
                    }
                  >
                    2. Get an instant cash offer.
                  </div>
                  <div
                    className={
                      styles[
                        "transparentprocess-content-tabs-content-item-copy"
                      ]
                    }
                  >
                    No staging, no photos, no open house, no inspections, no negotiating, no
                    time wasted. Done in 15 days**.
                  </div>
                </div>
              )}
              {selectedIndex === 2 && (
                <div
                  className={
                    styles["transparentprocess-content-tabs-content-item"]
                  }
                >
                  <div
                    className={
                      styles[
                        "transparentprocess-content-tabs-content-item-title"
                      ]
                    }
                  >
                    3. List with us for only 1%<sup>2</sup>.
                  </div>
                  <div
                    className={
                      styles[
                        "transparentprocess-content-tabs-content-item-copy"
                      ]
                    }
                  >
                    Our expert agents will list your property, capture beautiful photos, and host
                    a single open house for only 1% listing fee, saving you thousands.
                  </div>
                </div>
              )}
              {selectedIndex === 2 && (
                <div
                  className={
                    styles["transparentprocess-content-tabs-content-item"]
                  }
                >
                  <div
                    className={
                      styles[
                        "transparentprocess-content-tabs-content-item-title"
                      ]
                    }
                  >
                    4. Save thousands<sup>1</sup>.
                  </div>
                  <div
                    className={
                      styles[
                        "transparentprocess-content-tabs-content-item-copy"
                      ]
                    }
                  >
                    Lower payments, lower fees, and lower rates with our Preferred Lender.
                    Plus get 1.5% of the loan amount back in closing credit, up to $10,000!
                  </div>
                </div>
              )}
            </div>
            <div className={styles["advantage-content-item-get-started-link"]}>
              <ArrowButton
                link_text="Get started"
                callback={() => {
                  gtmPush([
                    "callback",
                    "home_destress_get_started",
                    () => {
                      doGetStarted();
                    },
                  ]);
                }}
                large_text={true}
              />
            </div>

            {/* <div className={styles["transparentprocess-content-link-holder"]}>
                <a onClick={()=>{doGetStarted();}}>Get Started</a>{" "}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destress;
