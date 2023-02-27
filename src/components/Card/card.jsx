import React from 'react';
// import { cards } from '../../data/data';
// import backery from '../../assets/images/Backery.png';
import './card.css';
// import Boss from '../../assets/images/Boss.png';
// import eco from '../../assets/images/eco.png';
// import game from '../../assets/images/game.png';
// import todo from '../../assets/images/todo.png';
// import data from './data.json'
import pics from '../../pics.json';


export const Card = () => {
  return (
    <>
      {pics.map(card => (
        <div key={card.id} className="card">
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
          <a href={card.demo} className="card__link demo-btn" target="_blank" rel="noreferrer">Demo</a>
          <a href={card.github} className="card__link" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      ))}
    </>
  )
}