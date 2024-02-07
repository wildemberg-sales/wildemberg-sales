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
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop={true}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
        >
            <SwiperSlide className={styles.slide}>
                <img src='will1.png'/>
                <div className={styles.title}>
                    <h3>Título</h3>
                    <img src='link.jpg'/>
                </div>
                <p>descrição do projeto que está sendo apresentado</p>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <img src='will1.png'/>
                <div className={styles.title}>
                    <h3>Título</h3>
                    <img src='link.jpg'/>
                </div>
                <p>descrição do projeto que está sendo apresentado</p>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <img src='will1.png'/>
                <div className={styles.title}>
                    <h3>Título</h3>
                    <img src='link.jpg'/>
                </div>
                <p>descrição do projeto que está sendo apresentado</p>
            </SwiperSlide>
        </Swiper>
    )
}