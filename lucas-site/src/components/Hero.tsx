import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>
            Consultoria Agronômica SOD: <br />
            <span className="highlight">Produtividade Sustentável.</span> <br />
            Colheitas Excepcionais.
          </h1>
          <p>
            Especialista em otimização agrícola. Analisamos sua propriedade e implementamos 
            técnicas científicas para maximizar sua produtividade e rentabilidade no campo.
          </p>
          <button className="cta-button">
            Agende sua Consultoria Rural
          </button>
        </div>
        <div className="hero-visual">
          <div className="hero-stats">
            <div className="stat">
              <h3>+45%</h3>
              <p>Aumento Produtividade</p>
            </div>
            <div className="stat">
              <h3>-30%</h3>
              <p>Redução de Perdas</p>
            </div>
            <div className="stat">
              <h3>150+</h3>
              <p>Propriedades Atendidas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;