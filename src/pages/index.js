import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// Components
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div>  
      <Layout
        pagina="Inicio"
      >
        <h1 className='heading'>Desde Inicio</h1>      
      </Layout>    
    </div>
  )
}
