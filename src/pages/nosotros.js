import Image from "next/image";

// Components
import Layout from "../components/Layout";

// Styles
import styles from '../styles/nosotros.module.css';

const Nosotros = () => {
  return (
    <div>
      <Layout pagina="Nosotros">
        <main className="contenedor">
          <h2 className="heading">Nosotros</h2>
          <div className={styles.contenido}>
            <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="Imágen Sobre Nosotros"/>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                at convallis quam. Morbi eu lorem volutpat neque commodo
                pellentesque. Morbi tempor lorem et velit egestas convallis.
                Quisque convallis et mi et tempus. Pellentesque laoreet leo at
                lacus pharetra, sit amet tristique arcu eleifend. Curabitur ac
                dictum velit, et consectetur nisl. Etiam tristique orci ac
                lectus porttitor, ut ultricies enim posuere. Fusce tincidunt
                ligula nulla, ac consectetur lectus ullamcorper id. 
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                at convallis quam. Morbi eu lorem volutpat neque commodo
                pellentesque. Morbi tempor lorem et velit egestas convallis.
                Quisque convallis et mi et tempus. Pellentesque laoreet leo at
                lacus pharetra, sit amet tristique arcu eleifend. Curabitur ac
                dictum velit, et consectetur nisl. Etiam tristique orci ac
                lectus porttitor, ut ultricies enim posuere. Fusce tincidunt
                ligula nulla, ac consectetur lectus ullamcorper id.
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default Nosotros;
