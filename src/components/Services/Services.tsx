import styles from './services.module.scss'
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";

function Services() {
    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: cardsRef, inView: cardsInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    return (
        <motion.div transition={{ duration: 5 }} className={styles.servicesContainer} id='service'>
            <motion.h1  ref={titleRef}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: titleInView ? 1 : 0, y: titleInView ? 0 : 20 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={styles.servicesContainer__title}
            >
                Перелік послуг
            </motion.h1>
            <div className={styles.servicesContainer__cards} ref={cardsRef}>
                <motion.div
                    className={styles.servicesContainer__cards_card}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: cardsInView ? 1 : 0, y: cardsInView ? 0 : 20 }}
                    transition={{ duration: 1, delay: 0.5}}
                >
                    <h1>Консультація з питань авторського права, ТМ та інших обʼєктів інтелектуальної власності</h1>
                    <a href='https://t.me/anna_ip_law' target={'_blank'}>Замовити</a>
                </motion.div>
                <motion.div
                    className={styles.servicesContainer__cards_card}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: cardsInView ? 1 : 0, y: cardsInView ? 0 : 20 }}
                    transition={{ duration: 1, delay: 0.7}}>
                    <h1>Видалення незаконного контенту з соціальних мереж</h1>
                    <a href='https://t.me/anna_ip_law' target={'_blank'}>Замовити</a>
                </motion.div>
                <motion.div
                    className={styles.servicesContainer__cards_card}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: cardsInView ? 1 : 0, y: cardsInView ? 0 : 20 }}
                    transition={{ duration: 1, delay: 0.9}}>
                    <h1>Аудит інфопродукту на предмет захисту інтелектуальної власності</h1>
                    <a href='https://t.me/anna_ip_law' target={'_blank'}>Замовити</a>
                </motion.div>
                <motion.div
                    className={styles.servicesContainer__cards_card}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: cardsInView ? 1 : 0, y: cardsInView ? 0 : 20 }}
                    transition={{ duration: 1, delay: 0.11}}
                >
                    <h1>Реєстрація авторського права</h1>
                    <a href='https://t.me/anna_ip_law' target={'_blank'}>Замовити</a>
                </motion.div>
                <motion.div
                    className={styles.servicesContainer__cards_card}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: cardsInView ? 1 : 0, y: cardsInView ? 0 : 20 }}
                    transition={{ duration: 1, delay: 0.13}}
                >
                    <h1>Реєстрація промислових зразків</h1>
                    <a href='https://t.me/anna_ip_law' target={'_blank'}>Замовити</a>
                </motion.div>
                <motion.div
                    className={styles.servicesContainer__cards_card}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: cardsInView ? 1 : 0, y: cardsInView ? 0 : 20 }}
                    transition={{ duration: 1, delay: 0.15}}
                >
                    <h1>Медіація</h1>
                    <a href='https://t.me/anna_ip_law' target={'_blank'}>Замовити</a>
                </motion.div>
                <motion.div
                    className={styles.servicesContainer__cards_card}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: cardsInView ? 1 : 0, y: cardsInView ? 0 : 20 }}
                    transition={{ duration: 1, delay: 0.17}}
                >
                    <h1>Складання договорів у сфері ІТ: договори з підрядниками, ГІГ-контракти, Software Development Agreement, Master Service Agreement, Service Agreement та інших</h1>
                    <a href='https://t.me/anna_ip_law' target={'_blank'}>Замовити</a>
                </motion.div>
                <motion.div
                    className={styles.servicesContainer__cards_card}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: cardsInView ? 1 : 0, y: cardsInView ? 0 : 20 }}
                    transition={{ duration: 1, delay: 0.19}}
                >
                    <h1>Складання договорів про передачу авторських прав, ліцензійних та інших договорів щодо обʼєктів інтелектуальної власності</h1>
                    <a href='https://t.me/anna_ip_law' target={'_blank'}>Замовити</a>
                </motion.div>
                <motion.div
                    className={styles.servicesContainer__cards_card}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: cardsInView ? 1 : 0, y: cardsInView ? 0 : 20 }}
                    transition={{ duration: 1, delay: 0.21}}
                >
                    <h1>Реєстрація ФОП, що включає: консультацію щодо обрання системи оподаткування ФОП, вибору КВЕД, безпосередньо реєстрації, супровід першої спати податків</h1>
                    <a href='https://t.me/anna_ip_law' target={'_blank'}>Замовити</a>
                </motion.div>
            </div>

        </motion.div>
    );
}

export default Services;