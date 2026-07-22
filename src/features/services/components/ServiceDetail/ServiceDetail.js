import React from 'react';
import './ServiceDetail.css';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80';

function ServiceDetail({ service }) {
  if (!service) return null;

  const image = service.image || DEFAULT_IMAGE;

  return (
    <div className="service-detail">
      <div className="service-detail__inner">
        <div className="service-detail__media">
          <img src={image} alt="" className="service-detail__image" />
        </div>
        <div className="service-detail__body">
          <h2 className="service-detail__title">{service.name}</h2>
          <p className="service-detail__desc">{service.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetail;
