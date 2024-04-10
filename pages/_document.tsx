import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Imagens da melhor namorada que existe"
          />
          <meta property="og:site_name" content="nextjsconf-pics.vercel.app" />
          <meta
            property="og:description"
            content="Imagens da melhor namorada que existe"
          />
          <meta property="og:title" content="Melhor Namorada" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Melhor Namorada" />
          <meta
            name="twitter:description"
            content="Imagens da melhor namorada que existe"
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
