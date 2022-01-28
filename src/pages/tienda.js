// Components
import Layout from "../components/Layout";
import Listado from "../components/Listado";

const Tienda = ({guitarras}) => {
    // console.log(guitarras);

    return (  
        <Layout
            pagina="Tienda Virtal"
        >
            <main className="contenedor">
                <h1 className='heading'>Nuestra Coleccioón</h1>
                <Listado 
                    guitarras={guitarras}
                />
            </main>            
        </Layout>
    );
}

// Función para obtener los datos que se obtienen en cada request
export async function getServerSideProps() {
    const url=`${process.env.API_URL}/guitarras`;
    const respuesta=await fetch(url);
    const guitarras=await respuesta.json();
    console.log(guitarras);
  
    // Automaticamente tenemos acceso a los pros en esta página
    return{
        props:{
            guitarras
        }
    }    
}
 
export default Tienda;