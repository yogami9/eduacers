import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Category from './components/Category';
import About from './components/About';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import QuestionsSection from './components/QuestionsSection'; // Import the new QuestionsSection component

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Category />
        <About />
        <QuestionsSection /> 
        <Footer />
      </main>
      <BackToTop />
    </>
  );
};

export default App;