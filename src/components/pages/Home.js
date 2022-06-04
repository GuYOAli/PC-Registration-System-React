import React from 'react';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import { toast } from 'react-toastify';
import './Login.css';
import '../../App.css';

function Home() {
    toast("Welcome to Home PAGE");
  return (
    <>
      <HeroSection />
      <Cards />
    </>
  );
}

export default Home;
