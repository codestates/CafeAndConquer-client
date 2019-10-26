import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Returns an object like: { html, head, errorHtml, chunks, styles }
    return renderPage();
  }

  render() {
    return (
      <html>
        <Head>
          <script src="https://developers.kakao.com/sdk/js/kakao.min.js"></script>
        </Head>
        <body>
          {/* <Head>
            <script type="text/javascript">
              {Kakao.init('cad26943f3f53f49ee29f15228abed78')};
            </script>
          </Head> */}
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}