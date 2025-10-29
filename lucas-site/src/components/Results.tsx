import React from 'react';

const Results: React.FC = () => {
  const results = [
    {
      icon: '🌾',
      percentage: '+45%',
      title: 'Aumento de Produtividade',
      description: 'Incremento médio na produtividade por hectare após implementação das técnicas'
    },
    {
      icon: '�',
      percentage: '-30%',
      title: 'Economia de Água',
      description: 'Redução no consumo de água através de sistemas de irrigação inteligente'
    },
    {
      icon: '🛡️',
      percentage: '-50%',
      title: 'Redução de Perdas',
      description: 'Diminuição significativa de perdas por pragas, doenças e fatores climáticos'
    },
    {
      icon: '📊',
      percentage: '95%',
      title: 'Satisfação dos Produtores',
      description: 'Índice de satisfação dos produtores rurais atendidos pela consultoria'
    }
  ];

  return (
    <section className="results">
      <div className="container">
        <div className="results-header">
          <h2>Resultados comprovados no campo</h2>
          <p>Transformação real na produtividade e sustentabilidade da sua propriedade</p>
        </div>
        
        <div className="results-grid">
          {results.map((result, index) => (
            <div key={index} className="result-card">
              <div className="result-icon">{result.icon}</div>
              <div className="result-percentage">{result.percentage}</div>
              <h3>{result.title}</h3>
              <p>{result.description}</p>
            </div>
          ))}
        </div>
        
        <div className="results-guarantee">
          <h3>Compromisso com o Resultado</h3>
          <p>Acompanhamento técnico completo desde o plantio até a colheita. Garantimos melhoria mensurável na sua produtividade.</p>
        </div>
      </div>
    </section>
  );
};

export default Results;