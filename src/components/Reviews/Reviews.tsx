import styles from './reviews.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import Right  from '../../assets/icons/arrow-right.svg'
import  Left from '../../assets/icons/arrow-left.svg'
import Photo1 from '../../assets/main/photo-1.jpg'
import Photo2 from '../../assets/main/photo-2.jpg'
import Photo3 from '../../assets/main/photo-3.jpg'
import Photo4 from '../../assets/main/photo-4.jpg'
import Photo5 from '../../assets/main/photo-5.jpg'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css";
import {useRef} from "react";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";


function Reviews() {
    const swiperRef = useRef<any>(null);

    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const { ref: carouselRef, inView: carouselInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    return (
        <motion.div transition={{ duration: 5 }} className={styles.reviewsContainer} id='reviews'>
            <motion.h1
                ref={titleRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: titleInView ? 1 : 0, y: titleInView ? 0 : 20 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                Відгуки
            </motion.h1>
            <motion.div className={styles.reviewsContainerCarousel} ref={carouselRef} initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: carouselInView  ? 1 : 0, y: carouselInView  ? 0 : 20 }}
                        transition={{ duration: 1, delay: 0.4 }}>
                <button className={styles.reviewsContainerCarousel__customPrev} onClick={() => {
                    if (swiperRef.current) {
                        swiperRef.current.swiper.slidePrev();
                    }
                }}>
                    <img src={Left}/>
                </button>
                <Swiper
                    ref={swiperRef}
                    slidesPerView={3}
                    breakpoints={{
                        200: { // Виправлено порядок
                            slidesPerView: 1,
                            spaceBetween: 100
                        },
                        1000: {
                            slidesPerView: 2,
                            spaceBetween: 100
                        },
                        1500: {
                            slidesPerView: 3,
                            spaceBetween: 100
                        }
                    }}
                    navigation={{
                        prevEl: '.reviewsContainerCarousel__customPrev',
                        nextEl: '.reviewsContainerCarousel__customNext'
                    }}

                >
                    <SwiperSlide className={styles.reviewsContainer__item}>
                        <img src={Photo1} alt='photo' className={styles.reviewsContainer__item_photo}/>
                    </SwiperSlide>
                    <SwiperSlide className={styles.reviewsContainer__item}>
                        <img src={Photo2} alt='photo' className={styles.reviewsContainer__item_photo}/>
                    </SwiperSlide>
                    <SwiperSlide className={styles.reviewsContainer__item}>
                        <img src={Photo3} alt='photo' className={styles.reviewsContainer__item_photo}/>
                    </SwiperSlide>
                    <SwiperSlide className={styles.reviewsContainer__item}>
                        <img src={Photo4} alt='photo' className={styles.reviewsContainer__item_photo}/>
                    </SwiperSlide>
                    <SwiperSlide className={styles.reviewsContainer__item}>
                        <img src={Photo5} alt='photo' className={styles.reviewsContainer__item_photo}/>
                    </SwiperSlide>
                </Swiper>

                <button className={styles.reviewsContainerCarousel__customNext} onClick={() => {
                    if (swiperRef.current) {
                        swiperRef.current.swiper.slideNext();
                    }
                }}>
                    <img src={Right}/>
                </button>
            </motion.div>


        </motion.div>
    );
}

export default Reviews;