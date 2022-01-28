// Components
import Layout from "../components/Layout";
import ListadoBlog from "../components/ListadoBlog";

// Styles
import styles from "../styles/Blog.module.css";

const Blog = ({ entradas }) => {
  return (
    <Layout title="Blog">
      <main className="contenedor">  
        <ListadoBlog entradas={entradas} />
      </main>
    </Layout>
  );
};

// Función para obtener los datos que se obtienen en cada request
export async function getServerSideProps() {
  // Strapi permite ordenar los elementos por parámetro que indiquemos y en el orden que queramos
  const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`;
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();
  // console.log(entradas);

  // Automaticamente tenemos acceso a los pros en esta página
  return {
    props: {
      entradas,
    },
  };
}

export default Blog;
