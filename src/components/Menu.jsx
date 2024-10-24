"use client"
import { useEffect, useState, useRef, useCallback } from "react";

import styles from './styles/Menu.module.scss';

const Menu = () => {
    const [navColor, setNavColor] = useState("");
    const [showMenu, setShowMenu] = useState(false);

    const [menuLinks, setMenuLinks] = useState([
        {
            title: "Sell",
            links: [
                {
                    title: "Request an InstantOffer",
                    link: "/",
                },
                {
                    title: "How it Works",
                    link: "/",
                },
                {
                    title: "Pricing",
                    link: "/",
                },
            ],
            visible: false,
        }
  
    ]);

    function toggleMenu() {
        setShowMenu(!showMenu);
    }

    function toggleMenuLinks(index) {
        // false && console.log('toggleMenuLink', index);
        const tlinks = [...menuLinks];
        for(let i = 0; i < tlinks.length; i++) {
            if(i === index) {
                tlinks[i].visible = !tlinks[i].visible;
            }else{
                tlinks[i].visible = false;
            }
        }
        setMenuLinks(tlinks);
    }

    const scrolled = useCallback(() => {
        // false && console.log("scrolling");
        // false && console.log(window.scrollY);
        if (typeof window !== "undefined") {
            if(window.scrollY > 90){
                setNavColor("header-scrolled");
            }else{
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
        <div className={`${styles["header"]} ${styles[navColor]}`}>
            <div className={`${styles["header-menu-container"]} ${showMenu ? "visible" : ""}`}>
               <div className={styles["header-menu-container-overlay"]}></div>

                <div className={`${styles["header-menu-container-menu"]} ${showMenu ? "visible" : ""}`}>
                    <div className={styles["header-menu-container-menu-nav"]}>
                        <div className={styles["header-menu-container-menu-nav-title"]}>Menu</div>
                        <div className={styles["header-menu-container-menu-nav-close"]}> <img src="/img/menu_close.svg" alt="close" /> </div>
                    </div>
                    <div className={styles["header-menu-container-menu-links"]}>
                        {menuLinks.map((item, index) =>
                            <div key={index} className={styles['header-menu-container-menu-links-item']}>
                                <div className={styles["header-menu-container-menu-links-item-title"]}>{item.title}</div>

                                <div className={ item.visible ? styles['header-menu-container-menu-links-item-link-container-visible'] : styles['header-menu-container-menu-links-item-link-container']}>
                                    {item.links.map((link, lindex) =>
                                        <div key={lindex} className={styles["header-menu-container-menu-links-item-link"]}> <a href={link.link}>{link.title}</a> </div>
                                    )}
                                </div>
                            </div>
                        )}


                    </div>
                </div>
            </div>

        </div>            
    );
};

export default Menu;