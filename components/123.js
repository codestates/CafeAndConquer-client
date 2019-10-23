import Document, { Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';
import Index from '../pages/index';

export default class MyDocument extends Document {
  // static getInitialProps({ renderPage }) {
  //   // Step 1: Create an instance of ServerStyleSheet
  //   const sheet = new ServerStyleSheet();

  //   // Step 2: Retrieve styles from components in the page
  //   const page = renderPage((App) => (props) =>
  //     sheet.collectStyles(<App {...props} />),
  //   );

  //   // Step 3: Extract the styles as <style> tags
  //   const styleTags = sheet.getStyleElement();

  //   // Step 4: Pass styleTags as a prop
  //   return { ...page, styleTags };
  // }

  render() {
    return (
      <html>
        <Head>
          {/* Step 5: Output the styles in the head  */}
          {/* {this.props.styleTags} */}
          {/* <script
					type="text/javascript"
					src="//dapi.kakao.com/v2/maps/sdk.js?appkey=08621feb64d12ca619166a136815243f&libraries=services" ></script>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> */}
        </Head>
        <body>
          123
          <Index />
        </body>
      </html>
    );
  }
}