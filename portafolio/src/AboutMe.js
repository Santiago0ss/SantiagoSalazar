import styles from './AboutMe.module.css';

export default function AboutMe() {
    return (
        <section className={styles.aboutMe}>
            <main className={styles.aboutMeContainer}>
                <h3>SOBRE MÍ</h3>
                <p>Hola, soy Santiago</p>
            </main>
        </section>
    )
}