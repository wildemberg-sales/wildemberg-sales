'use client'
import SlideProjectsComponent from '@/components/SlideProjectsComponent/SlideProjectsComponent'
import styles from './page.module.css'


export default function projetos(){
    return(
        <main className={styles.main}>
            
            <div className={styles.projetos}>
                <h2>Projetos</h2>
                <div className={styles.projetosSlider}>
                    <SlideProjectsComponent/>
                </div>
            </div>

        </main>
    )
}