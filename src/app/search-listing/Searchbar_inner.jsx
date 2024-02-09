
// import ButtonFooter from "@/components/ButtonFooter";
import styles from './Searchbar.module.scss';


export default function Home() {

    return (
        <div className={styles["main"]}>
              <div className={styles["filter_main"]}>
              <div className={styles["left_search"]}>
                <input type="text" placeholder="Where are you looking for buy?" />
             </div>
              <div className={styles["right_search"]}>
                <button>Filter <span></span></button>
                </div>
              </div>
              <div className={styles["search_body"]}>
              <div className={styles["map_div"]}>
                 <img src="./img/map.png" alt="" srcset="map" />
                 </div>
              <div className={styles["card_div"]}>
                 
                 </div>
              </div>
        </div>
      );
}
