// Components
import Layout from "../components/Layout";
import Entrada from "../components/Entrada";

// Styles
import styles from "../styles/Blog.module.css";

const Blog = ({ entradas }) => {
  return (
    <Layout title="Blog">
      <main className="contenedor">
        <h2 className="heading">Blog</h2>

        <div className={styles.blog}>
            {
                entradas.map(entrada=>(
                    <Entrada
                        key={entrada.id}
                        entrada={entrada}
                    />
                ))
            }
        </div>
      </main>
    </Layout>
  );
};

// Función para obtener los datos que se obtienen en cada request
export async function getServerSideProps() {
  const url = "http://localhost:1337/blogs";
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();
  //console.log(entradas);

  // Automaticamente tenemos acceso a los pros en esta página
  return {
    props: {
      entradas,
    },
  };
}

export default Blog;
