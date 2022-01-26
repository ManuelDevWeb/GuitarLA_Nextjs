// Components
import Layout from "../components/Layout";
import Entrada from "../components/Entrada";

// Styles
import styles from "../styles/Blog.module.css";

const Blog = ({ entradas }) => {
  const url=`${process.env.NEXT_PUBLIC_API_URL}/blogs`;
  console.log(url);

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
  const url = `${process.env.API_URL}/blogs`;
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
