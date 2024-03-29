import React from 'react';
import './card.css';
import { pics } from '../../pics';

export const Card = () => {
  return (
    <>
      {pics.map(card => (
        <div key={card.id} className="card">
          <div className="container-description">
            <a 
              href={card.demo} 
              target="_blank"
              rel="noopener noreferrer"
            >  
              <img 
                src={card.img}
                alt={card.id}
                className="card__img"
              />
            </a>
            <h3 className="card__title">{card.title}</h3>
            <p className="card__text">{card.text}</p>
            <p className="card__technologies">{card.technologies}</p>
          </div>
          <div className='container-btn'>
            <a href={card.demo} className="card__link demo-btn" target="_blank" rel="noreferrer">Demo</a>
            <a href={card.github} className="card__link" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      ))}
    </>
  )
}