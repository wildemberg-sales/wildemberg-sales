import styles from "./page.module.css"

export default function sobre(){
    return(
        <main className={styles.main}>
            <div className={styles.center}>
                <div className={styles.sobre}>
                    <div className={styles.sobreImage}>
                        <img src="Will.png"/>
                        <a href="#">Download CV</a>
                    </div>
                    <p>Sou um estudante de <span>Engenharia de Software</span> com um profundo interesse em desenvolvimento <span>full-stack</span> e gestão de projetos. Com dois anos de experiência prática em desenvolvimento full-stack, estou comprometido em aplicar meu conhecimento e habilidades para <span>criar soluções tecnológicas inovadoras</span>. Meu objetivo é combinar minha paixão pela programação com minha aptidão para a <span>gestão de projetos</span>, tornando-me um profissional versátil e eficaz no mundo da engenharia de software.</p>
                </div>

                <div className={styles.skills}>
                    <div className={styles.skillsRow}>

                    </div>
                    <div className={styles.skillsRow}>

                    </div>
                    <div className={styles.skillsRow}>

                    </div>
                </div>
            </div>
        </main>
    )
}