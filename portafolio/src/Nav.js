import styles from"./nav.module.css";

export default function Nav() {
    return (
        <header>
            <div className={styles.imgContainer}><a href='#Main'>SS</a></div>
            <nav>
                <div><a href='/'>Inicio</a></div>
                <div><a href='/'>Sobre mí</a></div>
                <div><a href='/'>Proyectos</a></div>
                <div><a href='/'>Contacto</a></div>
            </nav>
        </header>
    )
}