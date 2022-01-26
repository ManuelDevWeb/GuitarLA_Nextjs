import Link from "next/link";

// Components
import Layout from "../components/layout";

// Styles
import styles from "../styles/NotFound.module.css";

const NotFound = () => {
    return (
            <div className={styles.notFound}>           
                <h1 className="heading">Página no encontrada</h1>

                <Link href="/">Volver al Inicio</Link>
            </div>
    );
}
 
export default NotFound;