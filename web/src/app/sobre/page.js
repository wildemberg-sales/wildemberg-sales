import HeaderComponentSecond from "@/components/HeaderComponentSecond/HeaderComponentSecond";
import styles from "./page.module.css"
import { Urbanist } from "next/font/google";
import FooterComponent from "@/components/FooterComponent/FooterComponent";

const urbanist = Urbanist({
    weight:'400',
    subsets:['latin']
})

export default function sobre(){
    return(
        <main className={styles.main}>
            <HeaderComponentSecond/>
            <div className={styles.center}>
                <div className={styles.sobre}>
                    <div className={styles.sobreImage}>
                        <img src="will1.png"/>
                        <a href="#" className={urbanist.className}>Download CV</a>
                    </div>
                    <p className={urbanist.className}>Sou um estudante de <span>Engenharia de Software</span> com um profundo interesse em desenvolvimento <span>full-stack</span> e gestão de projetos. Com dois anos de experiência prática em desenvolvimento full-stack, estou comprometido em aplicar meu conhecimento e habilidades para <span>criar soluções tecnológicas inovadoras</span>. Meu objetivo é combinar minha paixão pela programação com minha aptidão para a <span>gestão de projetos</span>, tornando-me um profissional versátil e eficaz no mundo da engenharia de software.</p>
                </div>

                <div className={styles.skills}>
                    <h2 className={urbanist.className}>Skills</h2>
                    <img src="skills.jpg"/>
                </div>

                <space className={styles.space}></space>
                
                <div className={styles.formacao}>
                    <h2 className={urbanist.className}>Formação e Cursos</h2>
                    <img src="formacao-cursos.jpg"/>
                </div>
            </div>
            <FooterComponent/>
        </main>
    )
}