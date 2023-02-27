import React from 'react'
import '../../index.css'
import { Navbar } from '../../components/Navbar/Navbar';
import './Header.css';
import { VscArrowDown } from 'react-icons/vsc';
import { BiMouseAlt } from 'react-icons/bi';
import { social } from '../../data/data';


export const Header = () => {
  return (
    <header className='header'>
      <Navbar />

      <div className="container container-hero">
        <div className="hero">
            <div className="hero__left">
              <div className="contacts-hero">
                {/* < Social/> */}
                <ul className="contacts__list">
                  {social.map(item => (
                    <li
                      key={item.id}
                    >
                      <a
                        href={item.url}
                        className={`contacts__icon hero__icon ${item.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.img}
                    </a>
                  </li>
                  ))}
                </ul>
              </div>

              <div className="hero-wrapp">
                <h1 className="hero-title">Hi, I am Vlada! <br />
                  Front End Developer
                </h1>

                <a
                  href="./data/Vladyslava_Buzova [Frontend Developer].pdf"
                  className="btn"
                  download
                >
                  Download Resume
                </a>

                <div className="scroll-down">
                  <BiMouseAlt className="scroll-icon mouse"/>
                  <a href="#about" className="scroll-down__link"> Scroll down</a>
                  <VscArrowDown className="scroll-icon"/>
                </div>
              </div>
            </div>

            <div className="hero__right"></div>
          </div>
      </div>
    </header>
  )
}