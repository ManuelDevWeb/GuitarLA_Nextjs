import Image from "next/image";
import Link from "next/link";

// Components
import Layout from "../../components/Layout";

// Styles
import styles from '../../styles/Guitarra.module.css';

const Producto = ({guitarra}) => {
    const {nombre, descripcion, imagen, precio}=guitarra[0];

    return (
        <Layout
            pagina={`Guitarra ${nombre}`}
        >
            <div className={styles.guitarra}>
                <Image laout="responsive" width={200} height={550} src={imagen[0].url} alt={`Imagen Guitarra ${nombre}`} />
                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>${precio}</p>  

                    <form className={styles.formulario}>
                        <label>Cantidad: </label>

                        <select>
                            <option value="">-- Seleccione --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>        
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>             
                        </select>

                        <input 
                            type="submit" 
                            value="Agregar al Carrito"
                        />
                    </form>             
                </div>
            </div>   
        </Layout> 
    );
}
 
export default Producto;


// Función para obtener los datos se obtienen en cada request
export async function getServerSideProps({query: {url}}){   
    const urlProducto=`${process.env.API_URL}/guitarras?url=${url}`;
    const respuesta=await fetch(urlProducto);
    const guitarra=await respuesta.json();
    //console.log(guitarra);

    return {
        props:{
            guitarra
        }
    }
}