import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// Styles
import styles from "../styles/Header.module.css";

const Header = ({ guitarra }) => {
  const router=useRouter();

  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
          {/* Logo */}
          <div>
            <Link href="/">
              <a>
                <Image
                  src="/img/logo.svg"
                  width={400}
                  height={100}
                  alt="Imagen Logo"
                />
              </a>
            </Link>
          </div>

          {/* Navegación */}
          <nav className={styles.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
          </nav>
        </div>

        {guitarra && (
          <div className={styles.modelo}>
            <h2>Modelo {guitarra.nombre}</h2>
            <p>{guitarra.descripcion}</p>
            <p className={styles.precio}>${guitarra.precio}</p>
            <Link href={`/guitarra/${guitarra.url}`}>
              <a className={styles.enlace}>Ver Producto</a>
            </Link>
          </div>
        )}
      </div>

      {router.pathname==='/' && (
        <div className={styles.guitarra}>
          <Image layout="fixed" width={500} height={1200} src="/img/header_guitarra.png" alt="Imagen Header Guitarra" />
        </div>        
      )}
    </header>
  );
};

export default Header;
