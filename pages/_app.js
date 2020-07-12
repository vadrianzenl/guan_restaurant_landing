import React from 'react';
import App from 'next/app';
import Layout from '../src/components/layout';

class LandingApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

export default LandingApp;
