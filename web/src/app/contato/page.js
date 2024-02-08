import HeaderComponent from '@/components/HeaderComponent/HeaderComponent';
import styles from './page.module.css'
import { Urbanist } from "next/font/google";
import FooterComponent from '@/components/FooterComponent/FooterComponent';

const urbanist = Urbanist({
    weight:'400',
    subsets:['latin']
})

export default function contato(){
    return(
        <main className={styles.main}>
            <HeaderComponent/>
            <h1 className={urbanist.className}>Entre em contato!</h1>
            <div className={styles.icons}>
                <a target='_blank' href='https://www.youtube.com/channel/UCbLgtPKV4Dj0bd6HtseP7bQ'><img src='youtube-icon.jpg'/></a>
                <a target='_blank' href='https://www.instagram.com/wildemberg.sales/'><img src='instagram-icon.jpg'/></a>
                <a target='_blank' href='https://www.linkedin.com/in/wildemberg-sales-86439913b/'><img src='linkedin-icon.jpg'/></a>
                <a target='_blank' href='https://github.com/wildemberg-sales'><img src='github-icon.jpg'/></a>
                <a target='_blank' href='mailto:wildemberg.sales.junior@gmail.com'><img src='email-icon.jpg'/></a>
            </div>
            <FooterComponent/>
        </main>
    )
}