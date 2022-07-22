import '../styles/globals.css'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
            data-n-head="true"
            rel="icon"
            type="image/x-icon"
            href="/favicon.ico"
          />
          <meta property="og:title" content="My page title" key="og:title" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=no"/>
          <meta charSet="utf-8" />

          {/* Test */}
          <meta name='application-name' content='Skijan' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content='Skijan' />
          <meta name='description' content='Skijan for everyone' />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='msapplication-TileColor' content='#2B5797' />
          <meta name='msapplication-tap-highlight' content='no' />
          <meta name='theme-color' content='#000000' />

          <link rel='apple-touch-icon' href='/icon-256x256.png' />

          {/* <link rel='icon' type='image/png' sizes='32x32' href='/icon/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/icon/favicon-16x16.png' /> */}
          <link rel='manifest' href='/manifest.webmanifest' />
          <link rel='shortcut icon' href='/favicon.ico' />
          {/* Test */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
