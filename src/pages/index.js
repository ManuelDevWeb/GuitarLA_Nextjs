// Components
import Layout from '../components/Layout';
import Listado from '../components/Listado';
import Curso from '../components/Curso';
import ListadoBlog from '../components/ListadoBlog';

export default function Home({guitarras, curso, entradas}) {
  return (
    <div>  
      <Layout
        pagina="Inicio"
        guitarra={guitarras[3]}
      >
        <main className='contenedor'>
          <h1 className='heading'>Nuestra Colección</h1>
          <Listado 
            guitarras={guitarras}
          />
        </main>

        <Curso curso={curso} />

        <section className='contenedor'>
          <ListadoBlog entradas={entradas} />
        </section>
        
      </Layout>    
    </div>
  )
}

// Función para obtener los datos que se obtienen en cada request
export async function getServerSideProps() {
  // Múltiples peticiones
  const urlGuitarras=`${process.env.API_URL}/guitarras`;
  const urlCursos=`${process.env.API_URL}/cursos`;
  const urlBlog=`${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`;
  // Con Promise.all las peticiones inicial al mismo tiempo
  const [resGuitarras, resCurso, resBlog]=await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlog)
  ]);

  const [guitarras, curso, entradas]=await Promise.all([
    resGuitarras.json(),
    resCurso.json(),
    resBlog.json()
  ]);

  // console.log(guitarras);
  // console.log(curso);
  // console.log(blog);

  // Automaticamente tenemos acceso a los pros en esta página
  return{
      props:{
          guitarras,
          curso,
          entradas
      }
  }
  
}
