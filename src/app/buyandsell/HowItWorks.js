"use client";
import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import useFlowGetStartedStore from "@/store/store.js";
import useWindowSize from "@/hooks/useWindowSize";

import styles from "./HowItWorks.module.scss";
import ArrowButton from "@/components/ArrowButton";
import useGoogleTagManager from "@/hooks/useGoogleTagManager";

const HowItWorks = ({}) => {
  const size = useWindowSize();
  const router = useRouter();
  const [dataLayer, doEventClick, gtmPush] = useGoogleTagManager();

  return (
    <div className={`${styles["main-component"]}`}>
      <div className={`${styles["main-content-container"]}  centered-content2`}>
        <div className={`${styles["title-container"]}`}>How it works.</div>
        <div className={`${styles["copy-container"]}`}>
          It’s not too good to be true, it’s just the way things should be.
        </div>

        <div className={`${styles["content-container"]}`}>
          {/* {size.width > 1919 && */}
          <div className={`${styles["main-image-container"]}`}>
            <img src="/img/how_it_works.gif" alt="How It Works" />
          </div>
          {/* }
                {size.width < 1920 && size.width > 1279 &&
                <div className={`${styles['main-image-container']}`}>
                    <img src="/img/instantoffer_balance_1280.png" alt="listing for one percent" />
                </div>
                }
                {size.width < 1280 && size.width > 1023 &&
                <div className={`${styles['main-image-container']}`}>
                    <img src="/img/instantoffer_balance_1024.png" alt="listing for one percent" />
                </div>
                }
                {size.width < 1024 &&
                <div className={`${styles['main-image-container']}`}>
                    <img src="/img/listingforone_house.png" alt="listing for one percent" />
                </div>
                } */}

          <div className={`${styles["main-copy-container"]}`}>
            <div className={`${styles["main-copy-title"]}`}>Selling the easy way.</div>
            <div className={`${styles["main-copy-copy-title"]}`}>Step 1</div>
            <div className={`${styles["main-copy-copy"]}`}>
              Use our free home value calculator to instantly see your home’s
              current value.{" "}
            </div>

            <div className={`${styles["main-copy-copy-title"]}`}>Step 2</div>
            <div className={`${styles["main-copy-copy"]}`}>
              Simplifying your life is our priority. Choose between an
              InstantOffer or list with us for just 1% – whatever suits you
              best, we’ll make it happen!
            </div>

            <div className={`${styles["main-copy-copy-title"]}`}>Step 3</div>
            <div className={`${styles["main-copy-copy"]}`}>
              Talk to us! Just take a few mins to fill us in on your home’s
              details and your agent will be there every step of the way, from
              contract to close.
            </div>

            <div className={`${styles["main-copy-copy-title"]}`}>Step 4</div>
            <div className={`${styles["main-copy-copy"]}`}>
              Sold! Pop the champagne and get packing!
            </div>
            <div className={`${styles["main-copy-footer"]}`}>
              <ArrowButton
                link_text="Get started"
                callback={() => {
                  // router.push(`/get_started?flow=sell&step=0&branch=9`);
                  gtmPush([
                    "callback",
                    "buysell_how_it_works_gs",
                    () => {
                      router.push(`/get_started?flow=sell&step=0&branch=9`);
                    },
                  ]);
                }}
              />
            </div>

            {/* <div className={`${styles['main-copy-footer']}`}>
                        <ArrowButton
                            link_text="Get started"
                            callback={()=>{
                                router.push(`/get_started?flow=sell&step=0&branch=9`);
                            }}
                        />
                    </div> */}
          </div>
        </div>

        <div
          className={`${styles["content-container"]} ${styles["content-container-reversed"]}`}
        >
          <div className={`${styles["main-copy-container"]}`}>
          <div className={`${styles["main-copy-title"]}`}>Buying the easy way.</div>
          <div className={`${styles["main-copy-copy-title"]}`}>Step 1</div>
            <div className={`${styles["main-copy-copy"]}`}>
              Get matched with a top local agent with connections, the know-how,
              and negotiation skills to get you home faster and easier.
            </div>

            <div className={`${styles["main-copy-copy-title"]}`}>Step 2</div>
            <div className={`${styles["main-copy-copy"]}`}>
              Get a same day pre-approval with our affiliated lender for
              increased buying power. With their rebate program, you may qualify
              for more than you thought!
            </div>

            <div className={`${styles["main-copy-copy-title"]}`}>Step 3</div>
            <div className={`${styles["main-copy-copy"]}`}>
              Discover a home you love, make an offer, negotiate, inspect, and
              appraise – all with your agent right by your side.
            </div>

            <div className={`${styles["main-copy-copy-title"]}`}>Step 4</div>
            <div className={`${styles["main-copy-copy"]}`}>
              Receive a lender paid credit of 1% of your financed loan amount to
              put towards your closing costs or to buy down your interest rate
              by 1 point.{" "}
            </div>

            <div className={`${styles["main-copy-footer"]}`}>
              <ArrowButton
                link_text="Get started"
                callback={() => {
                  // router.push(`/get_started?flow=sell&step=0&branch=9`);
                  gtmPush([
                    "callback",
                    "buysell_how_it_works_gs",
                    () => {
                      router.push(`/get_started?flow=sell&step=0&branch=9`);
                    },
                  ]);
                }}
              />
            </div>
          </div>

          <div className={`${styles["main-image-container"]}`}>
            <img src="/img/how_it_works2.gif" alt="How It Works" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
