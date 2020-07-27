import React from 'react';
import Head from 'next/head';
import Header from '../src/components/header';
import AboutUs from '../src/components/aboutUs';
import Benefits from '../src/components/benefits';
import Contact from '../src/components/contact';
import Footer from '../src/components/footer';
import PreLoader from '../src/components/preloader';
import { ToastContainer } from 'react-nextjs-toast';

const Landing = () => {
  return (
    <div>
      <Head>
        <title>Guan</title>
      </Head>
      <Header />
      <AboutUs />
      <Benefits />
      <Contact />
      <Footer />
      <PreLoader />
      <ToastContainer />
    </div>
  );
};

export default Landing;

