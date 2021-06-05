import Head from "next/head";
import { siteTitle } from "../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>{ siteTitle }</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
    </>
  );
}
