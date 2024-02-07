"use client"
import { useRouter } from "next/router";
import FlowHeader from "@/components/FlowHeader";
// import Header from './Header';
// import Questions from "./Questions";
// import Footer from '@/components/Footer';
import styles from './page.module.scss';

export default function Booking() {
    // const router = useRouter();
    return (
        <div className={styles['main']}>
            {/* <div className={styles['main-content-container']}> */}
                <iframe frameborder="0" style={{overflow: "hidden", height: "100vh", width: "100vw"}}  height="100%" width="100%" src="https://outlook.office365.com/owa/calendar/HomeEasyHomes@semperhl.com/bookings/"  title="Booking Form"></iframe>
            {/* </div> */}
        </div>
      )
}