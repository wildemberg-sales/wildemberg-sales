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
                    <img className={styles.skillsDesktop} src="skills.jpg"/>
                    <div className={styles.skillsMobile}>
                        <img style={{paddingRight:"30px"}} src="skills-mobile.jpg"/>
                        <img src="skills-mobile2.jpg"/>
                    </div>
                </div>

                <space className={styles.space}></space>
                
                <div className={styles.formacao}>
                    <h2 className={urbanist.className}>Formação e Cursos</h2>
                    
                    <img src="formacao-cursos.jpg"/>

                    <div className={styles.formacaoItens}>
                        <div className={styles.itens}>
                            <h3>Universidade de Brasília (UnB)</h3>
                            <p>Graduando em Engenharia de Software</p>
                        </div>
                        <div className={styles.itens}>
                            <h3>Danki Code</h3>
                            <p>Curso de Front-End (HTML, CSS, Javascript, ReactJS</p>
                        </div>
                        <div className={styles.itens}>
                            <h3>Danki Code</h3>
                            <p>Curso de C, Javascript e Typescript</p>
                        </div>
                        <div className={styles.itens}>
                            <h3>Danki Code e Jornada do Dev</h3>
                            <p>Curso de NodeJs (Express, API Rest, MySQL, MongoDB, Padrão MVC)</p>
                        </div>
                        <div className={styles.itens}>
                            <h3>Danki Code</h3>
                            <p>Curso de Banco de Dados Relacional e Não Relacional</p>
                        </div>
                        <div className={styles.itens}>
                            <h3>Jornada do Dev</h3>
                            <p>Curso de React Native, Pyhton, Django</p>
                        </div>
                        <div className={styles.itens}>
                            <h3>Jornada do Dev</h3>
                            <p>Curso de NextJS</p>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent/>
        </main>
    )
}