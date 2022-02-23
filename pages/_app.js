import '../styles/globals.css'
import AppProvider from '../utils/provider';

function MyApp({ Component, pageProps }) {
  return <AppProvider>
  <Component {...pageProps} />
</AppProvider>
}

export default MyApp
