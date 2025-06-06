import React from 'react';
import './ContainerCompartilhe.css';

function ContainerCompartilhe() {
  return (
    <div className="container-compartilhe">
      <div className="compartilhe-flex">
        <div className="compartilhe-texto">
          <h2 className="titulo-com-icone">
            <img src="/img/telaAjudar/icone3.png" alt="Ícone de megafone para compartilhar" className="icone-titulo" />
            Compartilhe Esperança: Seja Nossa Voz!
          </h2>
          <p>
            Sua voz é poderosa! Compartilhando nossa causa nas redes sociais e
            falando com amigos e familiares, você multiplica nossas chances de
            encontrar lares para nossos animais e pessoas dispostas a ajudar.
          </p>
          <ul>
            <li>Compartilhe perfis de animais para adoção</li>
            <li>Divulgue nossos eventos e campanhas</li>
            <li>Indique nosso trabalho para amigos</li>
            <li>Participe de campanhas de conscientização</li>
          </ul>
          <button>Siga-nos nas Redes</button>
        </div>
        {/* CORREÇÕES APLICADAS NA LINHA ABAIXO */}
        <img src="/img/telaAjudar/imagem3.png" alt="Mãos segurando um celular com redes sociais" className="img-compartilhe" />
      </div>
    </div>
  );
}

export default ContainerCompartilhe;