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
        <div className={styles['main']} style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <iframe frameborder="0" style={{overflow: "hidden", minHeight: "812px", width: "80vw"}}  height="100%" width="100%" src="https://api.leadconnectorhq.com/widget/booking/pyXj7RFuqzcePo2Oo1A1"  title="Booking Form"></iframe>
         
        </div>
      )
}