"use client"
import { useRef, useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import styles from './Header.module.scss';
// import styles from './searchbar.module.scss';
const Header = () => {

    return (
  
     <div className={styles.searchmain}>
            <Navbar />
     </div>

      

      
    );
};

export default Header;