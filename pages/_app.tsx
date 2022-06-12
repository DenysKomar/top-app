import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps,router }: AppProps):JSX.Element{
  return <>
        <Head>
          <title>My App</title>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <meta name="og:url" content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath } />
          <meta name="og:locale" content='ru_RU' />
          <meta name="og:type" content='article' />
        </Head>
   <Component {...pageProps} />
   
   </>
}

export default MyApp
