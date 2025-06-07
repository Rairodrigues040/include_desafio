/*import React from 'react';
import Header from './components/header/Header';
import Time from './components/Seçao_time/Seçao_time';
import Footer from './components/Footer/footer';
import NossosValores from './components/Nossos_Valores/NossosValores';
import CadastroAnimais from './screens/CadastroAnimais';
import './App.css';

const App = () => {
  return (
    <div className="page">
      <Header />
      <main>
        <p>Olá, Time Includers</p>
        <NossosValores />
        <Time />
        <Footer/>
        <CadastroAnimais />
      </main>
    </div>
  );
};

export default App;*/

/* 
import React from 'react';
import Cards from './components/cards/Cards'
import PetCards from './components/cards/PetCard'

function App() {
  return (
    <div className="App">
      <header>
        
      </header>
      <main>
        <p>Esse é o conteúdo principal.</p>
        <Cards/>
        <PetCards/>
      </main>
      <footer>
        <p>&copy; 2025 Meu App</p>
      </footer>
    </div>
  );
}

export default App;


*/

import React from 'react';
import SecaoLaranja from './components/telaAjudar/Sessao1_telaComoAjudar/SecaoLaranja';
import ContainerAdote from './components/telaAjudar/Container1_telaComoAjudar/ContainerAdote';
import ContainerContribua from './components/telaAjudar/Container2_telaComoAjudar/ContainerContribua'; 
import ContainerCompartilhe from './components/telaAjudar/Container3_telaComoAjudar/ContainerCompartilhe';
import './index.css';

function App() {
  return (
    <>
      <SecaoLaranja />
      <ContainerAdote />
      <ContainerContribua />
      <ContainerCompartilhe />
    </>
  );
}

export default App;