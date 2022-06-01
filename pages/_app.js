import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tim Carew | Web Developer</title>
        <meta
          name="description"
          content="Tim Carew's Web Development Portfolio"
        />
        <meta property="og:image" content="/meta-tim.jpg" />
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://use.typekit.net/wlm2scr.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
