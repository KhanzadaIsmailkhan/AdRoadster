import React from 'react';
import billboardImg from './Billboards.png';
import outdoorSmdImg from './Outdoor-SMDS.png';
import digitalStreamersImg from './Digital-Pole.png';
import busSheltersImg from './Bus-Shelter.png';
import shopBrandingsImg from './WhatsApp-Image-2021-06-18-at-1.44.41-PM-1.jpeg';
import vahicaleBranding from './vehicle-branding-2.png';

const services = [
  {
    title: 'Billboards',
    imgSrc: billboardImg,
    link: '#'
  },
  {
    title: 'Outdoor SMD\'s',
    imgSrc: outdoorSmdImg,
    link: '#'
  },
  {
    title: 'Digital Streamers',
    imgSrc: digitalStreamersImg,
    link: '#'
  },
  {
    title: 'Bus Shelters',
    imgSrc: busSheltersImg,
    link: '#'
  },
  {
    title: 'Shop Brandings',
    imgSrc: shopBrandingsImg,
    link: '#'
  },
  {
    title: 'Vahicale Brandings',
    imgSrc: vahicaleBranding,
    link: '#'
  },
];

const OurServices = () => {
  return (
    <div className="our-services">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <a href={service.link} key={index} className="service-item">
            <img src={service.imgSrc} alt={service.title} />
            <h3>{service.title}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default OurServices;