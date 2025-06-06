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
