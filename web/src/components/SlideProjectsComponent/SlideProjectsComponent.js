import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './SlideProjectsComponent.module.css'

export default function SlideProjectsComponent(){
    return(
        <Swiper
            className={styles.containerSlide}
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop={true}
            autoplay={{
                delay: 3500,
                disableOnInteraction: true,
            }}
        >
            <SwiperSlide className={styles.slide}>
                <img src="https://canalciencia.ibict.br/wp-content/themes/tema-canal-ciencia/assets/img/logo-footer.png" alt="natural-food"/>
                <div className={styles.title}>
                    <h3>Canal Ciência</h3>
                    <a target="_blank" href="https://canalciencia.ibict.br/"><img src='link.jpg'/></a>
                </div>
                <p>
                    Participação na pesquisa e desenvolvimento de gamificação "Jornada Galáctica" para a plataforma Canal Ciência do IBICT (Instituto brasileiro de informação em ciência e tecnologia). Também atuando na análise de dados da plataforma com foco na identificação do impacto da gamificação nos usuários.
                </p>
            </SwiperSlide>

            <SwiperSlide className={styles.slide}>
                <img src="https://img.icons8.com/fluency/100/natural-food.png" alt="natural-food"/>
                <div className={styles.title}>
                    <h3>Plants Diseases</h3>
                    <a target="_blank" href="https://github.com/Wildemberg-Projects/Plants-Diseases"><img src='link.jpg'/></a>
                </div>
                <p>
                    Modelo de Deep Learning desenvolvido para a identificação de doenças em plantas baseado em imagens retiradas pela câmera do usuário final. Foi desenvolvido usando Python, TensorFlow, Numpy, e FastAPI.
                </p>
            </SwiperSlide>

            <SwiperSlide className={styles.slide}>
                <img src="querido-diario-logo.png" alt=""/>
                <div className={styles.title}>
                    <h3>Querido Diário</h3>
                    <a target="_blank" href="https://wildemberg-projects.github.io/LP-Querido-Diario/"><img src='link.jpg'/></a>
                </div>
                <p>
                    Participação no desenvolvimento de novas funcionalidades para o projeto open source Querido Diário da organização Open Knowledge. Atuei no desenvolvimento de features tando no lado front-end, como por exemplo a possibilidade dos dowloads de busca. E também no lado back-end, no processamento de massas de dados para compactação e otimização do sistema.
                </p>
            </SwiperSlide>
            
            <SwiperSlide className={styles.slide}>
                <img src='alectrion.png'/>
                <div className={styles.title}>
                    <h3>Alectrion</h3>
                    <a target="_blank" href="https://fga-eps-mds.github.io/2022-1-Alectrion-DOC/home/"><img src='link.jpg'/></a>
                </div>
                <p>
                    Sistema de gerênciamento de patrimônio público para a polícia civil do Goiás. Esta aplicação possui um front-end baseado em ReactJs, com uma arquitetura de micro-serviços, onde existem duas API's 
                    desenvolvidas em NodeJs,responsáveis pelo gerenciamento de usuários e equipamentos no banco de dados PostgreSQL.
                </p>
            </SwiperSlide>

            <SwiperSlide className={styles.slide}>
                <img src='willgram.png'/>
                <div className={styles.title}>
                    <h3>Willgram</h3>
                    <a target="_blank" href="https://github.com/wildemberg-sales/willgram"><img src='link.jpg'/></a>
                </div>
                <p>
                    Willgram é uma rede social desenvolvida em ReactJs interativa, e integração com Firebase para utilização dos bancos de dados não relacionais. 
                    <br/>O app conta com um sistema login e cadastro, sistema de postagem e de comentário nas postagens.
                </p>
            </SwiperSlide>

            <SwiperSlide className={styles.slide}>
                <img src="https://img.icons8.com/color-glass/100/palace.png" alt="palace"/>
                <div className={styles.title}>
                    <h3>Alvorecer Feudal</h3>
                    <a target="_blank" href="https://github.com/wildemberg-sales/DS-Feudo-Violeta"><img src='link.jpg'/></a>
                </div>
                <p>
                    Projeto desenvolvido para a disciplina de Desenvolvimento de Software na Universidade de Brasília, com o intuito de auxiliar o professor na gestão da matéria. 
                    Foi desenvolvido usando React Native e Firebase para utilização dos bancos de dados.
                </p>
            </SwiperSlide>
        </Swiper>
    )
}