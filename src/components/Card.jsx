import React from 'react';
import '../css/Card.css';
import card1 from "../Image/card1.avif"
import card2 from "../Image/card2.avif"
import card3 from "../Image/card3.avif"

const cardData = [
  {
    image: card1,
    title: 'Wedding Venues',
    description: '---',
    linkText: 'LEARN MORE',
  },
  {
    image: card2,
    title: 'Wedding Vendors',
    description: '---',
    linkText: 'LEARN MORE',
  },
  {
    image: card3,
    title: 'Custom Wedding Packages',
    description: 'Get your quote in 30 minutes',
    linkText: 'LEARN MORE',
  },
];

const Card = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '70px' }}>
      {cardData.map((card, index) => (
        <div className="card" key={index}>
          <div className="card-image">
            <img src={card.image} alt={card.title} />
          </div>
          <div className="card-content">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <a href="#">{card.linkText}</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
