import AboutImg from '../../assets/main/About.svg'
import styles from './about.module.scss'
import ListImg from '../../assets/icons/done.svg'
import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";

function About() {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.5
    })

    return (
        <motion.div
            ref = {ref}
            initial={{opacity: 0, y: 50}}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{duration: 0.8}}
            className={styles.aboutMeContainer} id='about'>
            <div className={styles.aboutMeContainer__image}>
                <img src={AboutImg} alt='about'/>
            </div>
            <div className={styles.aboutMeContainer__text}>
                <h1>Анна Прилуцька</h1>
                <div className={styles.aboutMeContainer__text_bottom}>
                    <p>Юрист у сфері інтелектуальної власності, спікер курсу Law Master школи IMAPM, сертифікований
                        медіатор, кандидат в члени Національної асоціації патентних повірених, ветеранка ЗСУ
                    </p>

                    <div className={styles.aboutMeContainer__text_bottom__list}>
                        <div className={styles.aboutMeContainer__text_bottom__list_item}>
                            <img src={ListImg} alt='list'/>
                            <p>Більше <span>300</span> годин консультацій у сфері інтелектуальної власності</p>
                        </div>
                        <div className={styles.aboutMeContainer__text_bottom__list_item}>
                            <img src={ListImg} alt='list'/>
                            <p>Більше <span>400</span> проведених пошуків на тотожність та схожість</p>
                        </div>
                        <div className={styles.aboutMeContainer__text_bottom__list_item}>
                            <img src={ListImg} alt='list'/>
                            <p>Більше <span>100</span>  успішно зареєстрованих торговельних марок</p>
                        </div>
                        <div className={styles.aboutMeContainer__text_bottom__list_item}>
                            <img src={ListImg} alt='list'/>
                            <p>Більше <span>200</span> одиниць видаленого контенту на різних майданчиках</p>
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    );
}

export default About;