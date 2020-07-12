import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class LandingDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="keywords" content="Bootstrap, Landing page, Template, Business, Service" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <meta name="description" content="Landing Page for the Guan.pe company" />
          <meta name="author" content="Guan Company" />

          <meta property="og:site_name" content="" />
          <meta property="og:site" content="" />
          <meta property="og:title" content="" />
          <meta property="og:description" content="" />
          <meta property="og:image" content="" />
          <meta property="og:url" content="" />
          <meta property="og:type" content="article" />

          <link rel="stylesheet" href="/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/css/animate.css" />
          <link rel="stylesheet" href="/css/LineIcons.css" />
          <link rel="stylesheet" href="/css/owl.carousel.css" />
          <link rel="stylesheet" href="/css/owl.theme.css" />
          <link rel="stylesheet" href="/css/magnific-popup.css" />
          <link rel="stylesheet" href="/css/nivo-lightbox.css" />
          <link rel="stylesheet" href="/css/main.css" />
          <link rel="stylesheet" href="/css/responsive.css" />
        </Head>
        <body>
          <Main />
          <NextScript />

          <script src="/js/jquery-min.js" />
          <script src="/js/popper.min.js" />
          <script src="/js/bootstrap.min.js" />
          <script src="/js/owl.carousel.js" />
          <script src="/js/jquery.nav.js" />
          <script src="/js/scrolling-nav.js" />
          <script src="/js/jquery.easing.min.js" />
          <script src="/js/nivo-lightbox.js" />
          <script src="/js/jquery.magnific-popup.min.js" />
          <script src="/js/main.js" />
        </body>
      </Html>
    );
  }
}

export default LandingDocument;
