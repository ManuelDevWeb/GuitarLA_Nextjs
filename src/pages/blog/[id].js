import { useRouter } from "next/router";

const EntradaBlog = ({ entrada }) => {
  // Accedemos a la información que hay en la url
  const router = useRouter();

  return (
    <div>
      <h1>Desde Entrada Blog</h1>
    </div>
  );
};

// Función para construir páginas por cada item del blog, obtener la ruta estática y su respectiva data
export async function getStaticPaths(){
    const url='http://localhost:1337/blogs';
    const respuesta=await fetch(url);
    const entradas=await respuesta.json();

    const paths=entradas.map(entrada=>(
        {
            params:{
                id: entrada.id.toString()
            }
        }
    ))

    return{
        paths,
        fallback: false
    }
}

// Función para obtener los datos cuando se crea el build
export async function getStaticProps({params: {id}}){
    const url = `http://localhost:1337/blogs/${id}`;
    // console.log(url);
    const respuesta = await fetch(url);
    const entrada = await respuesta.json();
    // console.log(entrada);

    return {
        props:{
            entrada
        }
    }
}

/*
// Función para obtener los datos se obtienen en cada request
export async function getServerSideProps({query: {id}}){
    const url = `http://localhost:1337/blogs/${id}`;
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
