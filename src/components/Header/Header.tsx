import styles from './header.module.scss';
import Poster from '../../assets/main/main-poster.png'
import BurgerMenu from '../../assets/icons/burger-menu.svg'
import Close from '../../assets/icons/close.svg'
import {useState} from "react";
import {motion} from "framer-motion";

function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleOpen = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5 }}
            className={styles.headerContainer}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className={styles.headerContainer_Top}>
                <ul className={`${styles.headerContainer_Top__list} ${
                        isOpen ? styles.headerContainer_Top__list_open : ''
                    }`}>
                    <li>
                        <a href="#about" className={styles.headerContainer_Top__list__text}>Про мене</a>
                    </li>

                    <li>
                        <a href="#service" className={styles.headerContainer_Top__list__text}>Послуги та ціни</a>
                    </li>
                    <li>
                        <a href="#reviews" className={styles.headerContainer_Top__list__text}>Відгуки</a>
                    </li>
                </ul>
                <div className={`${styles.headerContainer_Top__burger} ${isOpen ? styles.headerContainer_Top__burger_close : ''}`} onClick={handleOpen}>
                    <img src={isOpen ? Close : BurgerMenu} alt='menu'/>
                </div>
            </motion.div>
            <div className={styles.headerContainer_Bottom}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className={styles.headerContainer_Bottom__text}>
                    <h1>Привіт, я <span>Анна</span> -</h1>
                    <p>юрист з інтелектуальної власності</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: 1 }}
                    className={styles.headerContainer_Bottom__image}>
                    <img src={Poster} alt='poster'/>
                </motion.div>

            </div>

        </motion.div>
    );
}

export default Header;