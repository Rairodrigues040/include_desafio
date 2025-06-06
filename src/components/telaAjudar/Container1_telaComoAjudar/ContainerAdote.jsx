import React from 'react';
import './ContainerAdote.css'; // Importa os estilos específicos para este componente

function ContainerAdote() {
  // Nota: Os caminhos das imagens foram alterados para "/imagem1.png" e "/icone1.png".
  // Em projetos React, as imagens geralmente ficam na pasta `public`,
  // e você pode referenciá-las com uma barra no início.
  return (
    <div className="container-adote">
      <div className="adote-flex">
        <div className="adote-texto">
          <h2 className="titulo-com-icone">
            <img src="/img/telaAjudar/icone1.png" alt="Ícone Adote" className="icone-titulo" />
            Adote um Amigo Patodavida
          </h2>
          <p>
            A adoção é um ato de amor que transforma duas vidas: a do animal
            que ganha uma família e a sua, que se enche de alegria e
            companheirismo. Nossos animais estão prontos para dar e receber
            muito amor.
          </p>
          <ul>
            <li>Salve uma vida e ganhe um companheiro fiel</li>
            <li>Contribua para reduzir o número de animais abandonados</li>
            <li>Receba amor incondicional todos os dias</li>
            <li>Tenha acompanhamento pós-adoção gratuito</li>
          </ul>
          <button>Quero Adotar</button>
        </div>
          <img src="/img/telaAjudar/imagem1.png" alt="Cão feliz para adoção" className="img-adote" />
      </div>
    </div>
  );
}

export default ContainerAdote;