import React, { useState } from 'react'
import './burger.css'
import '../../App.css';
import '../../index.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
// import { useState } from 'react';
import { data } from '../../data/data';


// import { Navbar } from '../../components/Navbar/Navbar';
// import { VscArrowDown } from 'react-icons/vsc';
// import { BiMouseAlt } from 'react-icons/bi';
import { social } from '../../data/data';

const Burger = () => {
  const [isOpenedBurgerMenu, setIsOpenedBurgerMenu] = useState(false);
  const [isClosededBurgerMenu, setIsClosedBurgerMenu] = useState(false);

  // useEffect (() => {

  // }, [isOpenedBurgerMenu,isClosededBurgerMenu ])

  return (
     <>
      <button
        type="menu"
        className="burger-icon"
        onClick={() => setIsOpenedBurgerMenu(true)}
      > 
        <GiHamburgerMenu />
      </button>

      {/* {isOpenedBurgerMenu && ( */}
        {/* <div className={isClosededBurgerMenu? 'burger ' : 'burger burger-isShown'}> */}
        <div className="burger">
          <button
            className="close"
            onClick={() => setIsClosedBurgerMenu(true)}
          > 
            <RxCross2 className="close-icon"/>
          </button>

          <ul className="burger-nav">
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

            <ul className="contacts__list  contacts contacts-burger">
                {social.map(item => (
                  <li
                    key={item.id}
                  >
                    <a
                      href={item.url}
                      className={`contacts__icon hero__icon ${item.id}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.img}
                  </a>
                </li>
                ))}
              </ul>
      </div>

     {/* )} */}
  </>
  )
}

export default Burger