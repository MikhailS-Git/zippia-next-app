import '../styles/styles.css'

// create a wrapper-component in order to load global styles

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}