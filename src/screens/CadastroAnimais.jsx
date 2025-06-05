import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/Footer/footer';
import './CadastroAnimais.css';
import CadArea from './components/area';

const CadastroAnimais = () => {
  return (
    <div className="page">
        <Header />
        <main className='cadScreen'>
            <CadArea/>
        </main>
        <Footer/>
    </div>
  );
};

export default CadastroAnimais;