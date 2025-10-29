import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text">SOD</span>
              <span className="logo-subtitle">Consultoria</span>
            </div>
            <p>Transformando propriedades rurais através da ciência agronômica e técnicas sustentáveis.</p>
            <div className="social-links">
              <a href="https://linkedin.com/in/lucas-agro-sod" target="_blank" rel="noopener noreferrer">
                💼 LinkedIn
              </a>
              <a href="mailto:lucas@agroconsultoriasod.com">
                📧 Email
              </a>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                📱 WhatsApp
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Navegação</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Serviços</Link></li>
              <li><Link to="/cases">Cases</Link></li>
              <li><Link to="/contact">Contato</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Serviços Agronômicos</h3>
            <ul>
              <li>Análise de Solo e Sementes</li>
              <li>Agricultura de Precisão</li>
              <li>Manejo Sustentável</li>
              <li>Acompanhamento Técnico</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contato</h3>
            <p>📧 lucas@agroconsultoriasod.com</p>
            <p>📱 (11) 99999-9999</p>
            <p>💼 LinkedIn: /in/lucas-agro-sod</p>
            <p>⏰ Atendimento em todo Brasil</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Consultoria Agronômica SOD Lucas. Todos os direitos reservados.</p>
          <p>Solo • Otimização • Desenvolvimento Rural</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;