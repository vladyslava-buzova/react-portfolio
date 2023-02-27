import React from 'react';
import '../../App.css';
import '../../index.css';
import './Footer.css';
import { AiFillHeart } from 'react-icons/ai';
import { SlArrowUp } from 'react-icons/sl';
// import { Social } from '../../components/Social/Social';
import { social } from '../../data/data';

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <a href="#logo" className="scroll-up">
          <SlArrowUp/>
        </a>

        <div className="contacts footer__contacts">
          {/* <Social /> */}
          <ul className="footer__list">
            {social.map(item => (
              <li
                key={item.id}
              >
                <a
                  href={item.url}
                  className={`contacts__icon footer__icon ${item.id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.img}
              </a>
            </li>
            ))}
          </ul>
        </div>
        <span className="footer__devider"></span>
        <p className="footer__text">
          &copy;2023 - Developed with
          <span className="material-symbols-outlined footer__icon"> <AiFillHeart /> </span>
          by Vladyslava Buzova
        </p>
      </div>
    </footer>
  )
}