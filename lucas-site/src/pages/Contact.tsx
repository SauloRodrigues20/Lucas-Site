import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar o envio do formulário
    console.log('Form submitted:', formData);
    alert('Mensagem enviada! Entrarei em contato em breve.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="contact-header">
          <h1>Vamos Conversar sobre sua Propriedade</h1>
          <p>Pronto para revolucionar sua agricultura? Entre em contato comigo.</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h2>Lucas - Engenheiro Agrônomo</h2>
            <p>Mais de 10 anos de experiência em consultoria agronômica, ajudando produtores rurais a alcançar máxima produtividade através de técnicas científicas e sustentáveis.</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📧</div>
                <div className="method-info">
                  <h3>Email</h3>
                  <a href="mailto:lucas@agroconsultoriasod.com">lucas@agroconsultoriasod.com</a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">💼</div>
                <div className="method-info">
                  <h3>LinkedIn</h3>
                  <a href="https://linkedin.com/in/lucas-sod" target="_blank" rel="noopener noreferrer">
                    /in/lucas-sod
                  </a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">📱</div>
                <div className="method-info">
                  <h3>WhatsApp</h3>
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                    (11) 99999-9999
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Corporativo</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Descreva sua propriedade e desafios</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Conte-me sobre sua propriedade: tamanho, culturas, principais desafios e objetivos..."
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="cta-button">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
        
        <div className="contact-commitment">
          <h3>Meu Compromisso</h3>
          <p>Respondo todas as mensagens em até 24 horas úteis. Sua primeira visita técnica é gratuita e sem compromisso.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;