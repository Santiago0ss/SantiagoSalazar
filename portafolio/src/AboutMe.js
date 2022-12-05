import styles from './AboutMe.module.css';

export default function AboutMe() {
    return (
        <section className={styles.aboutMe}>
            <main className={styles.aboutMeContainer}>
                <div className={styles.wrapper}>
                    <h3 data-heading="Sobre mí">Sobre mí</h3>
                </div>
                    <p className={styles.primerParrafo}>Me presento, soy Santiago desarrollador front-end,
                    me apasiona la tecnologia, amo imaginar algo y plazmarlo en codigo.</p>
                    <p className={styles.segundoParrafo}>Desde finales de 2020 empezo mi viaje de sabiduria sobre el desarrollo web, un camino que me ha enseñado como se maqueta una pagina con HTML, como se le dan estilos con CSS, a darle dinamismo a la pagina con JavaScript, asi mismo a descubrir la facilidad que te da un framework como React, tambien a organizarme con NodeJs, y a tener un mejor control de las versiones de mis proyectos con Git (terminal).</p> 
                    <p className={styles.tercerParrafo}>Todo esto he sabido compensarlo con mis cualidades, soy muy social, me encanta aprender cosas nuevas, tengo empatia y mucho respeto hacia los demas.</p>
                    <p className={styles.cuartoParrafo}>Conoce mas sobre mis conocimientos</p>
            </main>
        </section>
    )
}