"use client"
import { Bayon, Cutive_Mono } from "next/font/google";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import styles from "./page.module.css";
import axios from 'axios';
import React from "react";
import FooterComponent from "@/components/FooterComponent/FooterComponent";

const bayon = Bayon({
  weight:'400',
  subsets:['latin']
})
const cm = Cutive_Mono({
  weight:'400',
  subsets:['latin']
})

export default function Home() {
  return (
    <main className={styles.main}>
      <HeaderComponent/>
      <div className={styles.columns}>
        <div className={styles.colum1}>
          <h1 className={bayon.className}>WILDEMBERG</h1>
          <h2 className={cm.className}>SALES</h2>
        </div>
        <div className={styles.colum2}>
          <a href="https://www.linkedin.com/in/wildemberg-sales-86439913b/" target="_blank"><img width="40" height="40" src="https://img.icons8.com/ios-filled/50/linkedin-2--v1.png" alt="linkedin-2--v1"/></a>
          <a href="https://github.com/wildemberg-sales" target="_blank"><img width="40" height="40" src="https://img.icons8.com/ios-filled/50/github.png" alt="github"/></a>
          <a href="https://instagram.com/wildemberg.sales" target="_blank"><img width="40" height="40" src="https://img.icons8.com/external-those-icons-fill-those-icons/50/external-Instagram-social-media-those-icons-fill-those-icons.png" alt="external-Instagram-social-media-those-icons-fill-those-icons"/></a>
        </div>
      </div>
      <div className={styles.frase}>
        <p>"Aquilo que se faz por amor está sempre além do bem e do mal"</p>
        <p>Friedrich Nietzsche</p>
      </div>
      <FooterComponent/>
    </main>
  );
}
