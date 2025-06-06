import React from 'react';
import './ContainerContribua.css'; // Importa os estilos específicos para este componente

function ContainerContribua() {
  // Novamente, os caminhos das imagens foram alterados para começar com "/"
  // para carregar a partir da pasta `public` do seu projeto.
  return (
    <div className="container-contribua">
      <div className="contribua-flex">
        <img src="/img/telaAjudar/imagem2.png" alt="Gato e cão à espera de doação" className="img-contribua" />
        <div className="contribua-texto">
          <h2 className="titulo-com-icone">
            <img src="/img/telaAjudar/icone2.png" alt="Ícone de coração para contribuição" className="icone-titulo" />
            Sua Contribuição Salva Vidas
          </h2>
          <p>
            Suas doações são fundamentais para mantermos nosso trabalho. Cada
            contribuição, por menor que seja, tem um impacto direto na vida dos
            animais que cuidamos, garantindo alimentação, medicamentos e

            cuidados veterinários.
          </p>
          <ul>
            <li>Ração e alimentação especial</li>
            <li>Medicamentos e tratamentos veterinários</li>
            <li>Materiais de higiene e limpeza</li>
            <li>Manutenção do abrigo e instalações</li>
          </ul>
          <button>Faça uma Doação</button>
        </div>
      </div>
    </div>
  );
}

export default ContainerContribua;