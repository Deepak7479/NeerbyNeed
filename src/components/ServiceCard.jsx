// src/components/ServiceCard.jsx
import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <h2>{service.name}</h2>
      <p>{service.description}</p>
    </div>
  );
};

export default ServiceCard;
