import Image from "next/image";
import styles from "./page.module.css";
import FooterComponent from "@/components/FooterComponent/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.columns}>
        <div className={styles.colum1}>
          <h1>Wildemberg</h1>
          <h2>SALES</h2>
        </div>
        <div className={styles.colum2}>
          <a href="https://www.linkedin.com/in/wildemberg-sales-86439913b/" target="_blank"><img width="40" height="40" src="https://img.icons8.com/ios-filled/50/linkedin-2--v1.png" alt="linkedin-2--v1"/></a>
          <a href="https://github.com/wildemberg-sales" target="_blank"><img width="40" height="40" src="https://img.icons8.com/ios-filled/50/github.png" alt="github"/></a>
          <a href="https://instagram.com/wildemberg.sales" target="_blank"><img width="40" height="40" src="https://img.icons8.com/external-those-icons-fill-those-icons/50/external-Instagram-social-media-those-icons-fill-those-icons.png" alt="external-Instagram-social-media-those-icons-fill-those-icons"/></a>
        </div>
      </div>
      <div className={styles.frase}>
        <p>"lorem ipsum 2.0 turbinado na brasa da corrida"</p>
        <p>Jorginho, Sacolé 2010</p>
      </div>
    </main>
  );
}
