import "../styles/globals.css";
import type { AppProps } from "next/app";
import Meta from "components/meta";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
