import Head from "next/head";
import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className="min-h-screen min-w-full bg-dark-purple">
        <Component {...pageProps} />
      </main>
    </>
  );
}
