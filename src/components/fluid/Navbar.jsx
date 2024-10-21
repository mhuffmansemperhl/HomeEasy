"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

import styles from "./Navbar.module.scss";
import useWindowSize from "@/hooks/useWindowSize";
import useGoogleTagManager from "@/hooks/useGoogleTagManager";

const Navbar = () => {
  const router = useRouter();
  const [dataLayer, doEventClick, gtmPush] = useGoogleTagManager();

  const windowSize = useWindowSize();
  const [navColor, setNavColor] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [showIDXMenu, setShowIDXMenu] = useState(false);

  const [menuLinks, setMenuLinks] = useState([
    {
      title: "Sell",
      links: [
        {
          title: "Request an InstantOffer",
          link: "/instantoffer",
          gtag: "menu_sell_req_io",
        },
        {
          title: "How it Works",
          link: "/sell",
          gtag: "menu_sell_how_works",
        },
        {
          title: "Pricing",
          link: "/calculator_savings",
          gtag: "menu_sell_pricing",
        },
      ],
      visible: false,
    },
    {
      title: "Buy",
      links: [
        {
          title: "Browse homes",
          link: "https://homeeasyhomes.idxbroker.com/idx/results/listings?pt=sfr&idxStatus=active&ccz=city&lp=100000&srt=newest&city%5B%5D=37986",
          gtag: "menu_buy_browse_homes",
        },
      ],
      visible: false,
    },
    {
      title: "Sell & Buy",
      links: [
        {
          title: "How it works",
          link: "/buyandsell",
          gtag: "menu_sb_how_works",
        },
        {
          title: "Request an InstantOffer",
          link: "/instantoffer",
          gtag: "menu_sb_req_io",
        },
        {
          title: "Pricing",
          link: "/calculator_savings",
          gtag: "menu_sb_pricing",
        },
        {
          title: "Browse homes",
          link: "https://homeeasyhomes.idxbroker.com/idx/results/listings?pt=sfr&idxStatus=active&ccz=city&lp=100000&srt=newest&city%5B%5D=37986",
          gtag: "menu_sb_browse_homes",
        },
      ],
      visible: false,
    },
    {
      title: "Mortgage",
      links: [
        {
          title: "Today's rates",
          link: "https://www.gethomeeasy.com/",
          gtag: "menu_mtg_todays_rates",
        },
        {
          title: "Home loans",
          link: "https://www.gethomeeasy.com/",
          gtag: "menu_mtg_home_loans",
        },
        {
          title: "Refinance",
          link: "https://www.gethomeeasy.com/",
          gtag: "menu_mtg_refi",
        },
      ],
      visible: false,
    },
    {
      title: "Agents",
      links: [
        {
          title: "Partner with us",
          link: "/agents",
          gtag: "menu_agents_partner",
        },
      ],
      visible: false,
    },
    {
      title: "About",
      links: [
        {
          title: "Company + Mission",
          link: "/about",
          gtag: "menu_about_comp_mission",
        },
        {
          title: "Contact",
          link: "/contact",
          gtag: "menu_about_contact",
        },
      ],
      visible: false,
    },
    {
      title: "Calculators",
      links: [
        {
          title: "Net proceeds",
          link: "/calculator_proceeds",
          gtag: "menu_calc_net_proceeds",
        },
        {
          title: "HomeEasy savings",
          link: "/calculator_savings",
          gtag: "menu_calc_he_savings",
        },
        {
          title: "Estimated monthly payments",
          link: "/calculator_monthly_payments",
          gtag: "menu_calc_est_mnt_pmts",
        },
      ],
      visible: false,
    },
    {
      title: "Help Center",
      links: [
        {
          title: "FAQ",
          link: "/questions",
          gtag: "menu_help_faq",
        },
        {
          title: "Contact",
          link: "/contact",
          gtag: "menu_help_contact",
        },
      ],
      visible: false,
    },
  ]);

  function openIDXMenu() {
    console.log("openIDXMenu");
    setShowIDXMenu(!showIDXMenu);
  }

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  function toggleMenuLinks(index) {
    // false && console.log('toggleMenuLink', index);
    const tlinks = [...menuLinks];
    for (let i = 0; i < tlinks.length; i++) {
      if (i === index) {
        tlinks[i].visible = !tlinks[i].visible;
      } else {
        tlinks[i].visible = false;
      }
    }
    setMenuLinks(tlinks);
  }

  const scrolled = useCallback(() => {
    // false && console.log("scrolling");
    // false && console.log(window.scrollY);
    if (typeof window !== "undefined") {
      if (window.scrollY > 90) {
        setNavColor("header-scrolled");
      } else {
        setNavColor("");
      }
    }
  });

  useEffect(() => {
    // setTimeout(() => {
    window.addEventListener("scroll", scrolled);
    //   false && console.log(window.scrollY);
    // }, 500);
  }, []);

  return (
    <div>
      <div className={`${styles["header"]} ${styles[navColor]}`}>
        <div
          className={`${styles["header-group-container"]} centered-content2`}
        >
          <div className={styles["header-logo-group"]}>
            <div
              onClick={() => {
                toggleMenu();
              }}
              className={styles["header-logo-group-hamburger-container"]}
            >
              {" "}
              <img src="/img/hamburger_menu.png" alt="Menu Button" />{" "}
            </div>
            <div
              className={styles["header-logo-group-logo-container"]}
              onClick={() => router.push("/")}
            >
              {" "}
              <img
                src="/img/home_easy_homes_logo.svg"
                alt="Home Easy Homes"
              />{" "}
            </div>
          </div>

          {windowSize.width > 1023 && (
            <div className={styles["header-link-group"]}>
              <div className={styles["header-link-group-link"]}>
                {" "}
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    // router.push("/buy");
                    gtmPush([
                      "callback",
                      "nav_buy",
                      () => {
                        router.push(`/buy`);
                      },
                    ]);
                  }}
                  className="underline-on-hover-red"
                  href="/"
                >
                  Buy
                </a>{" "}
              </div>
              <div className={styles["header-link-group-link"]}>
                {" "}
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    // router.push("/sell");
                    gtmPush([
                      "callback",
                      "nav_sell",
                      () => {
                        router.push(`/sell`);
                      },
                    ]);
                  }}
                  className="underline-on-hover-red"
                  href="/"
                >
                  Sell
                </a>{" "}
              </div>
              <div className={styles["header-link-group-link"]}>
                {" "}
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    // router.push("/buyandsell");
                    gtmPush([
                      "callback",
                      "nav_buy_sell",
                      () => {
                        router.push(`/buyandsell`);
                      },
                    ]);
                  }}
                  className="underline-on-hover-red"
                  href="/"
                >
                  Buy &amp; Sell
                </a>{" "}
              </div>
            </div>
          )}

          {windowSize.width > 1023 && (
            <div className={styles["header-button-group"]}>
              <div className={styles["header-button-group-button-container"]}>
                <div
                  onClick={() => {
                    // window.open("tel:866-904-3250");
                    gtmPush([
                      "callback",
                      "nav_phone",
                      () => {
                        window.open("tel:866-904-3250");
                      },
                    ]);
                  }}
                  className={styles["header-button-group-text"]}
                >
                  (866) 904-3250
                </div>
              </div>
              <div className={styles["header-button-group-button-container"]}>
                <div
                  onClick={() => {
                    console.log("clicked");
                    openIDXMenu();
                    // gtmPush(["callback", "nav_sign_in", ()=>{window.open('https://homeeasyhomes.idxbroker.com/idx/userlogin', '_blank');}]);
                  }}
                  className={
                    styles[
                      "header-button-group-button-container-user-icon-holder"
                    ]
                  }
                >
                  <div
                    className={
                      styles["header-button-group-button-container-user-icon"]
                    }
                  >
                    <img src="/img/user.png" alt="User icon" />
                  </div>
                </div>
              </div>

              {showIDXMenu && (
                <div
                  onMouseLeave={() => {
                    openIDXMenu();
                  }}
                  className={`${styles["header-idx-menu"]} `}
                >
                  <div className={styles["header-idx-menu-link"]}>
                    <a
                      href="https://homeeasyhomes.idxbroker.com/idx/myaccount#/saved-properties"
                      target="_blank"
                    >
                      Saved Homes
                    </a>
                  </div>
                  <div className={styles["header-idx-menu-link"]}>
                    <a
                      href="https://homeeasyhomes.idxbroker.com/idx/myaccount#/saved-searches"
                      target="_blank"
                    >
                      Saved Searches
                    </a>
                  </div>
                  <div className={styles["header-idx-menu-link"]}>
                    <a
                      href="https://homeeasyhomes.idxbroker.com/idx/myaccount#/market-reports"
                      target="_blank"
                    >
                      Market Reports
                    </a>
                  </div>
                  <div className={styles["header-idx-menu-link"]}>
                    <a
                      href="https://homeeasyhomes.idxbroker.com/idx/myaccount#/settings"
                      target="_blank"
                    >
                      Account Settings
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div
        className={`${styles["header-menu-container"]} ${
          showMenu ? "" : styles["header-menu-container-hidden"]
        }`}
      >
        <div
          onClick={() => {
            toggleMenu();
          }}
          className={
            showMenu
              ? styles["header-menu-container-overlay"]
              : styles["header-menu-container-overlay-hidden"]
          }
        ></div>

        <div
          className={
            showMenu
              ? styles["header-menu-container-menu"]
              : styles["header-menu-container-menu-hidden"]
          }
        >
          <div className={styles["header-menu-container-menu-nav"]}>
            <div className={styles["header-menu-container-menu-nav-title"]}>
              <img src="/img/footer_logo_icon.svg" alt="Logo" />
            </div>
            <div
              onClick={() => {
                toggleMenu();
              }}
              className={styles["header-menu-container-menu-nav-close"]}
            >
              {" "}
              <img src="/img/menu_close.png" alt="close" />{" "}
            </div>
          </div>
          {/* <div className={styles["header-menu-container-menu-nav-button-container"]}>
                        <div className={styles["header-menu-container-menu-nav-button"]}>
                            <button onClick={()=>{window.open('https://homeeasyhomes.idxbroker.com/idx/userlogin', '_blank');}} className="darken-on-hover">Sign In</button>
                        </div>
                        <div  onClick={()=>{window.open("tel:866-904-3250");}}  className={styles["header-menu-container-menu-nav-image"]}>
                            <img src="/img/phone-solid.png" alt="call now" />
                        </div>
                    </div> */}

          <div className={styles["header-menu-container-menu-links"]}>
            {menuLinks.map((item, index) => (
              <div
                key={index}
                className={styles["header-menu-container-menu-links-item"]}
              >
                <div
                  onClick={() => {
                    toggleMenuLinks(index);
                  }}
                  className={
                    item.visible
                      ? styles[
                          "header-menu-container-menu-links-item-title-visible"
                        ]
                      : styles["header-menu-container-menu-links-item-title"]
                  }
                >
                  {item.title}
                </div>

                <div
                  className={
                    item.visible
                      ? styles[
                          "header-menu-container-menu-links-item-link-container-visible"
                        ]
                      : styles[
                          "header-menu-container-menu-links-item-link-container"
                        ]
                  }
                >
                  <div
                    className={
                      styles[
                        "header-menu-container-menu-links-item-link-holder"
                      ]
                    }
                  >
                    {item.links.map((link, lindex) => (
                      <div
                        key={lindex}
                        className={
                          styles["header-menu-container-menu-links-item-link"]
                        }
                      >
                        {" "}
                        <a
                          className="underline-on-hover-red"
                          onClick={() => {
                            if (item.title === "Mortgage") {
                              if (link.gtag !== undefined) {
                                gtmPush(["callback", link.gtag, () => {}]);
                                window.open(link.link, "_blank");
                              } else {
                                window.open(link.link, "_blank");
                              }
                            } else {
                              if (link.gtag !== undefined) {
                                gtmPush([
                                  "callback",
                                  link.gtag,
                                  () => {
                                    router.push(link.link);
                                  },
                                ]);
                              } else {
                                router.push(link.link);
                              }
                            }
                          }}
                        >
                          {link.title}
                        </a>{" "}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles["header-menu-container-mobile-menu-buttons"]}>
          <div
            onClick={() => {
              window.open(
                "https://homeeasyhomes.idxbroker.com/idx/userlogin",
                "_blank"
              );
            }}
            className={
              styles[
                "header-menu-container-mobile-menu-buttons-button-container"
              ]
            }
          >
            {" "}
            <button>Your account</button>{" "}
          </div>
          <div
            onClick={() => {
              window.open("tel:866-904-3250");
            }}
            className={`${styles["header-menu-container-mobile-menu-buttons-button-container"]} ${styles["darker-button"]}`}
          >
            {" "}
            <button>Call</button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
