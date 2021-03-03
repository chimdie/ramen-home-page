import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout, { siteTitle } from './components/Layout'



export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="favicon.ico"/>
      </Head>
    </Layout>
  )
}
