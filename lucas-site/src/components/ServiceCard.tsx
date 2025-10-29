import React from 'react';

interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="service-card">
      <div className="service-icon">{service.icon}</div>
      <h3>{service.title}</h3>
      <p className="service-description">{service.description}</p>
      <ul className="service-features">
        {service.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="service-button">Saiba Mais</button>
    </div>
  );
};

export default ServiceCard;