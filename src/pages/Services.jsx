// src/pages/Services.jsx
import React from 'react';
import './Services.css';
import ServiceCard from '../components/ServiceCard.jsx';

const Services = () => {
  // Sample data for services
  const services = [
    { id: 1, name: 'Grocery Delivery', description: 'Fresh groceries delivered to your doorstep.' },
    { id: 2, name: 'Home Cleaning', description: 'Professional home cleaning services.' },
    { id: 3, name: 'Laundry Service', description: 'Convenient and quick laundry solutions.' },
  ];

  return (
    <div className="services">
      <h1>Our Services</h1>
      <div className="services-list">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
