import React from 'react';

const Tools: React.FC = () => {
  const methodologies = [
    {
      name: 'Agricultura de Precisão',
      logo: '�️',
      description: 'GPS, drones e sensores para otimização do campo'
    },
    {
      name: 'Manejo Integrado',
      logo: '�',
      description: 'Controle sustentável de pragas e doenças'
    },
    {
      name: 'Fertirrigação',
      logo: '�',
      description: 'Sistemas inteligentes de irrigação e nutrição'
    },
    {
      name: 'Análise de Solo',
      logo: '🌱',
      description: 'Laboratório e interpretação de análises'
    },
    {
      name: 'Biotecnologia',
      logo: '🧬',
      description: 'Sementes melhoradas e inoculantes'
    },
    {
      name: 'Sustentabilidade',
      logo: '♻️',
      description: 'Práticas conservacionistas e certificações'
    },
    {
      name: 'Zoneamento Agrícola',
      logo: '🗺️',
      description: 'Mapeamento e planejamento da propriedade'
    },
    {
      name: 'Pós-Colheita',
      logo: '�',
      description: 'Armazenamento e beneficiamento'
    }
  ];

  return (
    <section className="tools">
      <div className="container">
        <div className="tools-header">
          <h2>Tecnologias e Técnicas Aplicadas</h2>
          <p>Ferramentas modernas e conhecimento científico para maximizar sua produção</p>
        </div>
        
        <div className="methodologies-grid">
          {methodologies.map((method, index) => (
            <div key={index} className="methodology-card">
              <div className="methodology-logo">{method.logo}</div>
              <h3>{method.name}</h3>
              <p>{method.description}</p>
            </div>
          ))}
        </div>
        
        <div className="tools-expertise">
          <h3>Formação e Especializações</h3>
          <div className="certifications">
            <span className="cert">Engenheiro Agrônomo - CREA</span>
            <span className="cert">Mestrado em Fitotecnia</span>
            <span className="cert">Especialista em Agricultura de Precisão</span>
            <span className="cert">Consultor Certificado em Sustentabilidade</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;