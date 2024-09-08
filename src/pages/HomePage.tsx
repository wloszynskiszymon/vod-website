import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

const HomePage = () => {
  console.log(process.env);
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default HomePage;
