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
                    2. Fast, friction-free financing.
                  </div>
                  <div
                    className={
                      styles[
                        "transparentprocess-content-tabs-content-item-copy"
                      ]
                    }
                  >
                    Get pre-approved and ready to make an offer in minutes, not
                    days.
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
                    With instant access to new listings, you will be alerted the
                    moment a home hits the market.
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
                    4. Put thousands back in your pocket.
                  </div>
                  <div
                    className={
                      styles[
                        "transparentprocess-content-tabs-content-item-copy"
                      ]
                    }
                  >
                    Lower commission, lower fees, and lower rates…can we get a
                    hell yea for savings?
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
                    Gone are the days of resorting to work with your mom’s
                    cousin’s realtor friend.
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
                    3. Choose your selling model.
                  </div>
                  <div
                    className={
                      styles[
                        "transparentprocess-content-tabs-content-item-copy"
                      ]
                    }
                  >
                    When it comes to selling your home, we have options. No need
                    to be confined to the old, traditional way of doing things.
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
                    4. Throw a moving party with the extra money you save with
                    us.
                  </div>
                  <div
                    className={
                      styles[
                        "transparentprocess-content-tabs-content-item-copy"
                      ]
                    }
                  >
                    Lower commission and lower fees…can we get a hell yea for
                    savings?
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
                    2. Choose your selling model.
                  </div>
                  <div
                    className={
                      styles[
                        "transparentprocess-content-tabs-content-item-copy"
                      ]
                    }
                  >
                    When it comes to selling your home, we have options. No need
                    to be confined to the old, traditional way of doing things.
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
                    3. Find your dream home.
                  </div>
                  <div
                    className={
                      styles[
                        "transparentprocess-content-tabs-content-item-copy"
                      ]
                    }
                  >
                    With instant access to new listings, you will be alerted the
                    moment a home hits the market.
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
                    4. Put thousands back in your pocket.
                  </div>
                  <div
                    className={
                      styles[
                        "transparentprocess-content-tabs-content-item-copy"
                      ]
                    }
                  >
                    Lower commission, lower fees, and lower rates…can we get a
                    hell yea for savings?
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
