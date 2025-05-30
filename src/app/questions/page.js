"use client"
import { useRouter } from "next/navigation";
import Header from './Header';
import Questions from "./Questions";
import Footer from '@/components/fluid/Footer';
import styles from './page.module.scss';
import HomeSearchLinks from "@/components/fluid/HomeSearchLinks";

export default function Question() {
    const router = useRouter();
    return (
        <div className={styles.main}>
        <Header />
        <Questions />
        
        <Footer />
      </div>
      )
}