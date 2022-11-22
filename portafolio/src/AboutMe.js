import styles from './AboutMe.module.css';

export default function AboutMe() {
    return (
        <section className={styles.aboutMe}>
            <div id={styles.snow} className={styles.little}></div>
            <div id={styles.snow} className={styles.mid}></div>
            <div id={styles.snow} className={styles.big}></div>
            <main className={styles.aboutMeContainer}>
                <h3>SOBRE MÍ</h3>
                <p>Hola, soy Santiago</p>
            </main>
        </section>
    )
}