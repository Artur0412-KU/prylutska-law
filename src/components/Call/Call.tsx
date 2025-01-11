import styles from './call.module.scss'
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";

function Call() {
    const { ref: contentRef, inView: contentInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    return (
        <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: contentInView ? 1 : 0, y: contentInView ? 0 : 20 }}
            transition={{ duration: 2 }}
            className={styles.callContainer}
        >
            <h1>Залишились питання?</h1>
            <p>Пишіть сюди</p>
            <a href='https://t.me/anna_ip_law' target={'_blank'}>Зв’язатися</a>
        </motion.div>
    );
}

export default Call;