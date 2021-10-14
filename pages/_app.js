/* eslint-disable @next/next/no-sync-scripts */
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout';
import DataProvider from '../context/dataContext';
import Head from 'next/head';
import '../styles/light.css'
function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Head>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"></link>
      </Head>
      <Layout>
      <Component {...pageProps} />
    </Layout>
    </DataProvider>
    
  )
}

export default MyApp
