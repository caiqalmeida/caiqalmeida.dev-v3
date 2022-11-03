import Head from "next/head";
import type { AppProps } from "next/app";
import "../styles/globals.css";

import { Navbar } from "../components/navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Caique Almeida</title>
        <link rel="shortcut icon" href="/images/logo.svg" />
      </Head>

      <main className="min-h-screen min-w-full bg-dark-purple">
        <Navbar />
        <Component {...pageProps} />
      </main>
    </>
  );
}
