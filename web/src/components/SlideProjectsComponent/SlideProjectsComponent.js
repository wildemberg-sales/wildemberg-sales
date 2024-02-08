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
                <img src='alectrion.png'/>
                <div className={styles.title}>
                    <h3>Alectrion</h3>
                    <img src='link.jpg'/>
                </div>
                <p>
                    Sistema de gerênciamento de patrimônio público para a polícia civil do Goiás. Esta aplicação possui um front-end baseado em ReactJs, com uma arquitetura de micro-serviços, onde existem duas API's 
                    desenvolvidas em NodeJs,responsáveis pelo gerenciamento de usuários e equipamentos no banco de dados PostgreSQL.
                </p>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <img src='gf.png'/>
                <div className={styles.title}>
                    <h3>Gerência Financeira Pessoal</h3>
                    <img src='link.jpg'/>
                </div>
                <p>Projeto em desenvolvimento com as tecnologias React Native e NodeJS</p>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <img src='blog.png'/>
                <div className={styles.title}>
                    <h3>Blog Fiquei Sabendo</h3>
                    <img src='link.jpg'/>
                </div>
                <p>
                    Projeto de Blog dinâmico utilizando NodeJs e MongoDB, com modelo Server Side Rendering. O Blog conta com sua parte front-end em EJS com várias telas recebendo dados dinâmicamente, e junto em sua arquitetura monolítica se encontra o back-end em NodeJS que gerencia
                    todo o sistema de requisição e o CRUD de postagens com uma dashboard de administração.
                </p>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <img src='willgram.png'/>
                <div className={styles.title}>
                    <h3>Willgram</h3>
                    <img src='link.jpg'/>
                </div>
                <p>
                    Willgram é uma rede social desenvolvida em ReactJs interativa, e integração com Firebase para utilização dos bancos de dados não relacionais. 
                    <br/>O app conta com um sistema login e cadastro, sistema de postagem e de comentário nas postagens.
                </p>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <img src='gf.png'/>
                <div className={styles.title}>
                    <h3>Alvorecer Feudal</h3>
                    <img src='link.jpg'/>
                </div>
                <p>
                    Projeto desenvolvido para a disciplina de Desenvolvimento de Software na Universidade de Brasília, com o intuito de auxiliar o professor na gestão da matéria. 
                    Foi desenvolvido usando React Native e Firebase para utilização dos bancos de dados.
                </p>
            </SwiperSlide>
        </Swiper>
    )
}