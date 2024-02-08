'use client'
import SlideProjectsComponent from '@/components/SlideProjectsComponent/SlideProjectsComponent'
import styles from './page.module.css'
import { Urbanist } from "next/font/google";
import HeaderComponentSecond from '@/components/HeaderComponentSecond/HeaderComponentSecond';
import FooterComponent from '@/components/FooterComponent/FooterComponent';

const urbanist = Urbanist({
    weight:'400',
    subsets:['latin']
})

export default function projetos(){
    return(
        <main className={styles.main}>
            <HeaderComponentSecond/>

            <div className={styles.projetos}>
                <h2 className={urbanist.className}>Projetos</h2>
                <div className={styles.projetosSlider}>
                    <SlideProjectsComponent/>
                </div>
            </div>
            
            <div className={styles.pesquisas}>
                <h2 className={urbanist.className}>Pesquisas</h2>

                <div className={styles.pesquisa}>
                    <img src='ods.jpg'/>
                    <div className={styles.infoPesquisa}>
                        
                        <h3 className={urbanist.className}>Pesquisa ODS 9 - Cloud e Infraestrutura<a href='https://drive.google.com/file/d/1al0idAH7sC5swBLUczje_y164hvUC2va/view?usp=share_link' target='_blank'><img src='link.jpg'/></a></h3>
                        <p className={urbanist.className}> 
                            Pesquisa voltada ao estudo de como computação em nuvem pode auxiliar as metas de desenvolvimento sustentável da ODS(Objetivos de desenvolvimento sustentável) 9.
                            Nesta pesquisa foram avaliados fatores como computação em nuvem verde, questões econômicas voltadas a custo de implantação e mantimento, entre outros fatores.
                        </p>
                    </div>
                </div>

                <div className={styles.pesquisa2}>
                    <img src='gqm.jpg'/>
                    <div className={styles.infoPesquisa}>
                        <h3 className={urbanist.className}>Pesquisa GQM - Métricas de Desempenho Acadêmico<a href='https://drive.google.com/file/d/18t1sTfzwPRyuqOGVeoJvT9c_eLEDrGY6/view' target='_blank'><img src='link.jpg'/></a></h3>
                        <p className={urbanist.className}>
                            Pesquisa realizada para o estudo de fatores que podem afetar o desempenho acadêmico de alunos dentro da Universidade de Brasília(UnB). 
                            Para realização desta pesquisas foi utilizado Goal Question Metric - GQM que é uma abordagem de métricas, que apoiou a gestão dos fatores de pesquisas e a modelagem de seus resultados.
                        </p>
                    </div>
                </div>

                <div className={styles.pesquisa}>
                    <img src='skoob.jpg'/>
                    <div className={styles.infoPesquisa}>
                        <h3 className={urbanist.className}>Análise de Usabilidade Skoob<a href='https://interacao-humano-computador.github.io/2022.2-Skoob/' target='_blank'><img src='link.jpg'/></a></h3>
                        <p className={urbanist.className}>
                            Projeto desenvolvido para estudo da usabilidade do site Skoob, onde o foco era encontrar os problemas de usabilidade presentes na interface gráfica,
                            usando métodos e técnicas da engenharia de usabilidade para avaliar e propor ajustes e melhorias para a empresa responsável.
                        </p>
                    </div>
                </div>

                <div className={styles.pesquisa2}>
                    <img src='grasshopper.jpg'/>
                    <div className={styles.infoPesquisa}>
                        <h3 className={urbanist.className}>Análise de Requisitos Grasshopper<a href='https://requisitos-de-software.github.io/2022.2-Grasshopper/' target='_blank'><img src='link.jpg'/></a></h3>
                        <p className={urbanist.className}>
                            Projeto desenvolvido para estudos na área da engenharia de requisitos, utilizando diferentes métodos de inspeção, observação e engenharia reversa para uma abordagem mais aprofundada dos estudos de requisitos, metódos e técnicas utilizadas para elaboração do software Grasshoper da Google.
                        </p>
                    </div>
                </div>

            </div>

        <FooterComponent/>
        </main>
    )
}