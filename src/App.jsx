import React from 'react';
import Header from './components/header/Header';
import Time from './components/Seçao_time/Seçao_time';
import Footer from './components/Footer/footer';
import './App.css';

const App = () => {
  return (
    <div className="page">
      <Header />
      <main>
        <p>Olá, Time Includers</p>
        <Time />
        <Footer/>
      </main>
    </div>
  );
};

export default App;

