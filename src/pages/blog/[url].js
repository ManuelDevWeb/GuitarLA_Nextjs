import { useRouter } from "next/router";
import Image from "next/image";

// Helpers
import {formatearFecha} from '../../helpers';

// Components
import Layout from "../../components/layout";

// Styles
import styles from "../../styles/Entrada.module.css";

const EntradaBlog = ({ entrada }) => {
  const { contenido, imagen, published_at, titulo } = entrada;

  // Accedemos a la información que hay en la url
  const router = useRouter();

  return (
    <Layout
      pagina={titulo}
    >
      <main className="contenedor">
        <h1 className="heading">{titulo}</h1>
        <article className={styles.entrada}>
          <Image
            layout="responsive"
            width={800}
            height={600}
            src={imagen.url}
            alt={`Imagen entrada ${titulo}`}
          />
          <div className={styles.contenido}>
            <p className={styles.fecha}>{formatearFecha(published_at)}</p>
            <p className={styles.texto}>{contenido}</p>
          </div>
        </article>
      </main>
    </Layout>
  );
};

// Función para construir páginas por cada item del blog, obtener la ruta estática y su respectiva data
export async function getStaticPaths() {
  const url = `${process.env.API_URL}/blogs`;
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();

  const paths = entradas.map((entrada) => ({
    params: {
      url: entrada.url,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

// Función para obtener los datos cuando se crea el build
export async function getStaticProps({ params: { url } }) {
  const urlBlog = `${process.env.API_URL}/blogs?url=${url}`;
  // console.log(url);
  const respuesta = await fetch(urlBlog);
  const entrada = await respuesta.json();
  // console.log(entrada);

  return {
    props: {
      entrada: entrada[0]
    },
  };
}

/*
// Función para obtener los datos se obtienen en cada request
export async function getServerSideProps({query: {id}}){   
    const url = `${process.env.API_URL}/blogs/${id}`;
    console.log(url);
    const respuesta = await fetch(url);
    const entrada = await respuesta.json();
    console.log(entrada);

    return {
        props:{
            entrada
        }
    }
}
*/

export default EntradaBlog;
