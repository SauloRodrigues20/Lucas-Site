import React from 'react';
import ServiceCard from '../components/ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      id: 'soil-seeds',
      title: 'S - Solo & Sementes',
      icon: '�',
      description: 'Análise completa do solo e seleção das melhores variedades para sua região e objetivos. Preparamos o terreno para máxima produtividade desde o início.',
      features: [
        'Análise física, química e biológica do solo',
        'Seleção de variedades adaptadas', 
        'Planejamento de correção do solo',
        'Estratégia de plantio otimizada'
      ]
    },
    {
      id: 'optimization',
      title: 'O - Otimização',
      icon: '🚜',
      description: 'Implementamos técnicas modernas de manejo sustentável, otimizando recursos como água, nutrientes e defensivos para máxima eficiência produtiva.',
      features: [
        'Sistemas de irrigação inteligente',
        'Programa nutricional personalizado',
        'Manejo integrado de pragas e doenças',
        'Agricultura de precisão'
      ]
    },
    {
      id: 'development',
      title: 'D - Desenvolvimento',
      icon: '�',
      description: 'Acompanhamento técnico contínuo desde o plantio até a colheita, com transferência de tecnologia para sua equipe e monitoramento de indicadores.',
      features: [
        'Visitas técnicas regulares',
        'Treinamento da equipe rural',
        'Monitoramento de indicadores',
        'Relatórios de desempenho'
      ]
    }
  ];

  return (
    <div className="services">
      <div className="container">
        <div className="services-header">
          <h1>Soluções Agronômicas SOD</h1>
          <p>Metodologia científica para transformar sua propriedade rural</p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <div className="services-cta">
          <h2>Pronto para implementar essas soluções na sua propriedade?</h2>
          <button className="cta-button">Agende sua Consultoria Rural</button>
        </div>
      </div>
    </div>
  );
};

export default Services;