import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'João Fazendeiro',
      position: 'Produtor Rural',
      company: 'Fazenda Santa Clara - 500 ha',
      testimonial: 'Com a consultoria do Lucas, nossa produtividade de soja aumentou 50% em apenas uma safra. O investimento se pagou já no primeiro ano. Excelente profissional!',
      rating: 5
    },
    {
      name: 'Maria Oliveira',
      position: 'Proprietária Rural',
      company: 'Sítio Água Viva - Fruticultura',
      testimonial: 'A implementação do sistema de fertirrigação revolucionou nosso pomar. Reduzimos 40% no uso de água e aumentamos a qualidade dos frutos. Recomendo demais!',
      rating: 5
    },
    {
      name: 'Pedro Agronegócio',
      position: 'Diretor Técnico',
      company: 'Cooperativa Regional',
      testimonial: 'Lucas nos ajudou a implementar agricultura de precisão em mais de 50 propriedades. Os resultados foram excepcionais, com aumento médio de 35% na produtividade.',
      rating: 5
    },
    {
      name: 'Ana Sustentável',
      position: 'Produtora Orgânica',
      company: 'Fazenda Orgânica Verde',
      testimonial: 'A transição para agricultura orgânica com o acompanhamento técnico do Lucas foi um sucesso. Conquistamos certificação e triplicamos nossa margem de lucro.',
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return '⭐'.repeat(rating);
  };

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2>O que os produtores rurais dizem</h2>
          <p>Depoimentos reais de produtores que transformaram suas propriedades</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
              <blockquote>
                "{testimonial.testimonial}"
              </blockquote>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.position}</p>
                <span className="company">{testimonial.company}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="testimonials-stats">
          <div className="stat">
            <h3>4.9/5</h3>
            <p>Avaliação Média</p>
          </div>
          <div className="stat">
            <h3>100%</h3>
            <p>Recomendação</p>
          </div>
          <div className="stat">
            <h3>200+</h3>
            <p>Propriedades Atendidas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;