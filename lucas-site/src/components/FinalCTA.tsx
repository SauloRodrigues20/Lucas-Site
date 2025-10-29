import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="final-cta">
      <div className="container">
        <div className="cta-content">
          <h2>Pronto para revolucionar sua propriedade?</h2>
          <p>
            Transforme sua fazenda em um modelo de produtividade e sustentabilidade. 
            Agende uma visita técnica gratuita e descubra o potencial da sua terra.
          </p>
          <div className="cta-features">
            <div className="feature">
              <span className="feature-icon">✅</span>
              <span>Visita técnica gratuita</span>
            </div>
            <div className="feature">
              <span className="feature-icon">✅</span>
              <span>Diagnóstico personalizado</span>
            </div>
            <div className="feature">
              <span className="feature-icon">✅</span>
              <span>Acompanhamento técnico</span>
            </div>
          </div>
          <button className="cta-button large">
            Agende sua Consultoria Rural
          </button>
          <p className="cta-note">
            Atendemos em todo o território nacional
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;