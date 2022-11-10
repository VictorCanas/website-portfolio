import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
        <script src="https://unpkg.com/flowbite@1.4.4/dist/flowbite.js"></script>
</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
