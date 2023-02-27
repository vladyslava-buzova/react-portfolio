import React from 'react'
import './Navbar';
import { data } from '../../data/data';
// import './Navbar.scss';
import './Navbar.css';
// import '../Navbar/Navbar'
import '../../index.css'
import Burger from '../burger/burger';

export const Navbar = () => {
  return (
    <nav className='nav'>
      <div className="container container-nav">
        <div className="nav-wrapp">
          <a href="/" class="logo" id="logo">Vladyslava B<span class="logo-period period">.</span></a>

          <ul class="nav-right">
            {data.map(item => (
              <li
                key={item.id}
                class="nav-right__item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <a href={`#${item.id}`} class="nav-right__link">{item.name}</a>
              </li>
            ))}
          </ul>

         <Burger />
        </div>
      </div>
    </nav>
  )
}