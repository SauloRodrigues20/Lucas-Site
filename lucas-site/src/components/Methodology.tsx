import React from 'react';

const Methodology: React.FC = () => {
  const pillars = [
    {
      letter: 'S',
      title: 'Solo & Sementes',
      description: 'Análise e Preparação',
      details: 'Análise completa do solo, seleção de variedades ideais e planejamento do plantio para máxima produtividade.'
    },
    {
      letter: 'O',
      title: 'Otimização',
      description: 'Manejo Sustentável',
      details: 'Implementação de técnicas modernas de irrigação, nutrição vegetal e controle integrado de pragas e doenças.'
    },
    {
      letter: 'D',
      title: 'Desenvolvimento',
      description: 'Acompanhamento Técnico',
      details: 'Monitoramento contínuo da cultura, ajustes no manejo e transferência de tecnologia para sua equipe rural.'
    }
  ];

  return (
    <section className="methodology">
      <div className="container">
        <div className="methodology-header">
          <h2>A Metodologia SOD Agronômica</h2>
          <p>Ciência aplicada para transformar sua propriedade rural em um modelo de produtividade</p>
        </div>
        
        <div className="pillars-grid">
          {pillars.map((pillar, index) => (
            <div key={index} className="pillar-card">
              <div className="pillar-icon">
                <span className="pillar-letter">{pillar.letter}</span>
              </div>
              <h3>{pillar.title}</h3>
              <p className="pillar-description">{pillar.description}</p>
              <p className="pillar-details">{pillar.details}</p>
            </div>
          ))}
        </div>
        
        <div className="methodology-flow">
          <div className="flow-arrow">→</div>
          <div className="flow-arrow">→</div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;