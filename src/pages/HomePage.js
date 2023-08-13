import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className='overflow-hidden'>
      <NavBar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default HomePage;
