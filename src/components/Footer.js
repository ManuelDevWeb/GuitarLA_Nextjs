import Link from 'next/link';

// Styles
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`contenedor ${styles.contenido}`}>           
                {/* Navegación Footer*/}
                <nav className={styles.navegacion}>
                    <Link href="/">Inicio</Link>
                    <Link href="/nosotros">Nosotros</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/tienda">Tienda</Link>
                </nav>

                <p className={styles.copyright}>Todos los derechos reservados 2022</p>
            </div>
        </footer>
    );
}
 
export default Footer;