import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (<> <h1>header</h1><Component {...pageProps} /></>);
}
