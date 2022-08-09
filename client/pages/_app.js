import '../styles/globals.css'
// import type { AppProps } from 'next/app'
import { TransactionProvider } from '../context/TransactionContext'
import ThemeProvider  from "./theme/ThemeProvider";
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
    <TransactionProvider>
    <Head>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </Head>
      <Component {...pageProps} />
    </TransactionProvider>
    </ThemeProvider>
  )
}

export default MyApp
