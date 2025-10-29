import React from 'react';
import CaseCard from '../components/CaseCard';

const Cases: React.FC = () => {
  const cases = [
    {
      id: 1,
      title: 'Aumento de 50% na Produtividade de Soja',
      category: 'Grãos - Fazenda 500 ha',
      image: '�',
      description: 'Implementação de agricultura de precisão e manejo nutricional otimizado, resultando em recordes de produtividade por hectare.',
      results: ['+50% Produtividade', '60 sc/ha', '-20% Custos com Fertilizantes'],
      duration: '1 safra'
    },
    {
      id: 2,
      title: 'Revolução na Fruticultura Irrigada',
      category: 'Frutas - Pomar 50 ha',
      image: '🍊',
      description: 'Sistema de fertirrigação inteligente e manejo integrado de pragas, aumentando qualidade e reduzindo perdas significativamente.',
      results: ['-40% Uso de Água', '+60% Qualidade', '90% Redução Perdas'],
      duration: '8 meses'
    },
    {
      id: 3,
      title: 'Transição para Agricultura Orgânica',
      category: 'Orgânicos - 200 ha',
      image: '♻️',
      description: 'Acompanhamento completo na transição para sistema orgânico, conquistando certificação e acesso a mercados premium.',
      results: ['Certificação Orgânica', '+200% Margem', 'Mercado Premium'],
      duration: '24 meses'
    },
    {
      id: 4,
      title: 'Pecuária Sustentável de Precisão',
      category: 'Pecuária - 1000 cabeças',
      image: '🐄',
      description: 'Implementação de manejo rotacionado e suplementação estratégica, aumentando produtividade do rebanho e das pastagens.',
      results: ['+35% Peso Vivo', '2x Lotação/ha', '-25% Custos Alimentação'],
      duration: '12 meses'
    },
    {
      id: 5,
      title: 'Modernização da Cafeicultura',
      category: 'Café - 100 ha',
      image: '☕',
      description: 'Renovação do cafezal com variedades resistentes e sistema de irrigação por gotejamento, conquistando certificação especial.',
      results: ['+80% Produtividade', 'Café Especial', 'Certificação UTZ'],
      duration: '36 meses'
    },
    {
      id: 6,
      title: 'Horticultura Protegida Intensiva',
      category: 'Hortaliças - Estufas',
      image: '🥬',
      description: 'Implantação de sistema hidropônico em ambiente protegido, garantindo produção o ano todo com alta qualidade.',
      results: ['12 Ciclos/Ano', '+300% Produtividade', 'Zero Defensivos'],
      duration: '6 meses'
    }
  ];

  return (
    <div className="cases">
      <div className="container">
        <div className="cases-header">
          <h1>Cases de Sucesso no Campo</h1>
          <p>Resultados reais alcançados em propriedades rurais de todo o Brasil</p>
        </div>
        
        <div className="cases-grid">
          {cases.map((caseItem) => (
            <CaseCard key={caseItem.id} caseData={caseItem} />
          ))}
        </div>
        
        <div className="cases-stats">
          <div className="stat">
            <h3>+200</h3>
            <p>Propriedades Atendidas</p>
          </div>
          <div className="stat">
            <h3>95%</h3>
            <p>Taxa de Sucesso</p>
          </div>
          <div className="stat">
            <h3>50K+</h3>
            <p>Hectares Otimizados</p>
          </div>
        </div>
        
        <div className="cases-cta">
          <h2>Sua propriedade pode ser o próximo case de sucesso</h2>
          <button className="cta-button">Agendar Visita Técnica</button>
        </div>
      </div>
    </div>
  );
};

export default Cases;