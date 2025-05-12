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
                        <div className={styles.sobreAreas}>
                            <h3>Áreas de Atuação</h3>
                            <p>Engenharia de Software</p>
                            <p>Inteligência Artificial</p>
                            <p>Gamificação</p>
                        </div>
                    </div>
                    <p className={urbanist.className}>
                        Sou engenheiro de software com ampla atuação no setor de tecnologia, desenvolvendo soluções inovadoras em diferentes frentes. Atualmente, ocupo a posição de Gerente de Projetos e Inovação em uma empresa, onde lidero iniciativas estratégicas voltadas para a transformação digital. Paralelamente, atuo como engenheiro de software full-stack em outra organização, contribuindo diretamente para o desenvolvimento e a manutenção de sistemas robustos e escaláveis.<br/>
                        Além da atuação profissional, também desenvolvo pesquisas nas áreas de análise de dados, inteligência artificial e gamificação, com foco em aplicar esses conhecimentos na criação de soluções tecnológicas mais eficientes, interativas e orientadas por dados. Tenho como propósito aliar conhecimento técnico à inovação, promovendo impacto real nos projetos em que estou envolvido.
                    </p>
                </div>

                <div className={styles.skills}>
                    <h2 className={urbanist.className}>Skills</h2>
                    <div className={styles.skillsimg}>
                        <img src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white" alt="C#" />
                        <img src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="C++" />
                        <img src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white" alt="C" />
                        <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
                        <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
                        <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
                        <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="Python" />
                        <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
                        <img src="https://img.shields.io/badge/blazor-%235C2D91.svg?style=for-the-badge&logo=blazor&logoColor=white" alt="Blazor" />
                        <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS" />
                        <img src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase" alt="Firebase" />
                        <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
                        <img src="https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white" alt="Render" />
                        <img src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi" alt="FastAPI" />
                        <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js" />
                        <img src="https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE" alt="Insomnia" />
                        <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" alt="JWT" />
                        <img src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white" alt="NPM" />
                        <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
                        <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
                        <img src="https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD" alt="Nodemon" />
                        <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
                        <img src="https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React Native" />
                        <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
                        <img src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white" alt="React Query" />
                        <img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" alt="Redux" />
                        <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="Styled Components" />
                        <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
                        <img src="https://img.shields.io/badge/WordPress-%23117AC9.svg?style=for-the-badge&logo=WordPress&logoColor=white" alt="WordPress" />
                        <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
                        <img src="https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white" alt="Yarn" />
                        <img src="https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white" alt="Nginx" />
                        <img src="https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34" alt="Firebase (Dark)" />
                        <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
                        <img src="https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
                        <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
                        <img src="https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white" alt="SQL Server" />
                        <img src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite" />
                        <img src="https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white" alt="Canva" />
                        <img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" alt="Figma" />
                        <img src="https://img.shields.io/badge/Keras-%23D00000.svg?style=for-the-badge&logo=Keras&logoColor=white" alt="Keras" />
                        <img src="https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white" alt="NumPy" />
                        <img src="https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white" alt="Pandas" />
                        <img src="https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white" alt="TensorFlow" />
                        <img src="https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white" alt="Scikit-learn" />
                        <img src="https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black" alt="Matplotlib" />
                        <img src="https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white" alt="GitHub Actions" />
                        <img src="https://img.shields.io/badge/gitlab%20CI-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white" alt="GitLab CI" />
                        <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
                        <img src="https://img.shields.io/badge/gitlab-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white" alt="GitLab" />
                        <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
                        <img src="https://img.shields.io/badge/bitbucket-%230047B3.svg?style=for-the-badge&logo=bitbucket&logoColor=white" alt="Bitbucket" />
                        <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
                        <img src="https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white" alt="Notion" />
                        <img src="https://img.shields.io/badge/power_bi-F2C811?style=for-the-badge&logo=powerbi&logoColor=black" alt="Power BI" />
                        <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="Postman" />
                        <img src="https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white" alt="Swagger" />
                    </div>
                </div>
                
                <div className={styles.formacao}>
                    <h2 className={urbanist.className}>Formações e Cursos</h2>
                    
                    {/* <img src="formacao-cursos.jpg"/> */}
                    <div className={styles.formacaoDiv}>
                        <h3>Formação Acadêmica</h3>
                        <p>Engenharia de Software - Universidade de Brasília (UnB) - (2021 - 2026)</p>
                    </div>

                    <div className={styles.formacaoDivTwoCol}>
                        <div className={styles.formacaoDivTwo}>
                            <h3>Formação Complementar</h3>

                            <h4>2025</h4>
                            <ul>
                                <li>NLW Connect - C# - Back-end Intermediário – Rocketseat (6h)</li>
                                <li>Google AI Essentials – Coursera (6h)</li>
                                <li>Fundamentos de Inteligência Artificial e IA Generativa – Coursera (6h)</li>
                            </ul>

                            <h4>2024</h4>
                            <ul>
                                <li>NLW Pocket: Javascript - Full-stack Intermediário – Rocketseat (5h)</li>
                                <li>Machine Learning e Deep Learning – Danki Code (11h)</li>
                                <li>Trilha Digital | Coders 24 | DevOps – Ada Tech (16h)</li>
                                <li>Imersão em Computação Avançada – Projeto de Residência em TIC (540h)</li>
                                <li>Imersão Inteligência Artificial 2ª Edição – Alura (6h)</li>
                                <li>Python IA Backend Developer – DIO (67h)</li>
                            </ul>

                            <h4>2023</h4>
                            <ul>
                                <li>Etapa de Nivelamento – Programa de Residência em TIC (180h)</li>
                                <li>Extensão: Segurança da Informação, Desenvolvimento Seguro e Qualidade de Software – UnB (6h)</li>
                                <li>Curso de C – Danki Code (5h)</li>
                                <li>Computação em Nuvem | AWS Discovery Day – KaSolution (4h)</li>
                                <li>Conectar – Rocketseat (3h)</li>
                            </ul>

                            <h4>2022</h4>
                            <ul>
                                <li>NodeJS – Danki Code (10h)</li>
                                <li>Front-end Completo – Danki Code (10h)</li>
                                <li>Banco de Dados – Danki Code (5h)</li>
                                <li>Javascript – Danki Code (14h)</li>
                            </ul>
                        </div>

                        <div className={styles.formacaoDivTwo}>
                            <h3>Atuações Profissionais</h3>

                            <ul className={styles.formacaoDivTwoList}>
                                <strong>Instituto Hardware BR</strong> (2024 - Atual)<br/>
                                <li>
                                    Estagiário em Engenharia de Software (30h/semana)
                                </li>

                                <strong>Med-BR</strong> (2023 - Atual)<br/>
                                <li>
                                    Gerente de Projetos e Inovação (30h/semana)<br/>
                                    Atuação na organização e gerenciamento de equipes para desenvolvimento de novos produtos.
                                </li>

                                <strong>BRISA - Sociedade para o Desenvolvimento da Tecnologia da Informação</strong><br/>
                                <li>
                                    Engenheiro de Software (2024, Celetista, 20h/semana)<br/>
                                    Pesquisador (2024-2025, Bolsista, 20h/semana)<br/>
                                    Pesquisa em Plataformas Gamificadas com foco em análise de dados e estratégias de gamificação.
                                </li>

                                <strong>Universidade de Brasília (UnB)</strong><br/>
                                <li>
                                    Monitor em Métodos de Desenvolvimento de Software (2023-2025, 5 semestres)<br/>
                                    Monitor em Interação Humano Computador (2023)
                                </li>

                                <strong>Centro de Estudos, Desenvolvimento e Inovação em Software (CEDIS)</strong><br/>
                                <li>
                                    Pesquisador (2024-2025, Bolsista, 20h/semana)
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
            <FooterComponent/>
        </main>
    )
}