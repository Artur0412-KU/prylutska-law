import styles from './footer.module.scss'
import Telegram from '../../assets/icons/telegram.svg'
import Instagram from '../../assets/icons/instagram.svg'
import Linkedin from '../../assets/icons/linkedin.svg'
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";

function Footer() {
    const { ref: contentRef, inView: contentInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <motion.div ref={contentRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: contentInView ? 1 : 0, y: contentInView ? 0 : 20 }}
                    transition={{ duration: 2 }} className={styles.footerContainer}>
            <ul className={styles.footerContainer__List}>
                <li>
                    <a>Про мене</a>
                </li>
                <li>
                    <a>Послуги та ціни</a>
                </li>
                <li>
                    <a>Відгуки</a>
                </li>
            </ul>

            <div className={styles.footerContainer__Social_media}>
                <a href='https://www.instagram.com/prylutska_law/?hl=en' target={'_blank'}>
                   <img src={Instagram}/>
                </a>
                <a href='https://t.me/anna_ip_law' target={'_blank'}>
                    <img src={Telegram}/>
                </a>
                <a href='https://www.linkedin.com/in/%D0%B0%D0%BD%D0%BD%D0%B0-%D0%BA%D1%83%D0%B4%D0%B8%D1%80%D0%BA%D0%BE-93a575206/' target={'_blank'}>
                    <img src={Linkedin}/>
                </a>
            </div>
        </motion.div>
    );
}

export default Footer;