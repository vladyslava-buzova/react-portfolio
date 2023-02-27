import React from 'react';
import './Skills.css';
import '../../index.css';
import { skills } from '../../data/data';

export const Skills = () => {
  return (
    <section className="skills-section" id="skills">
        <div className="container">
          <h2 className="title-secondary">Skills</h2>
          <div className="skills grid-container">

            <ul className="grid-item">
              {skills.map(skill => (
                <li
                  className="skills__item"
                  key={skill.id}
                >
                  {skill.name}
                  {/* <span
                    className="material-symbols-outlined skills-boolets"
                  >
                  code
                  </span>React JS */}
                </li>
              ))}
              
              {/* <li className="skills__item">
                <span className="material-symbols-outlined skills-boolets">
                code
                </span>JavaScript(ES6)</li>
              <li className="skills__item">
                <span className="material-symbols-outlined skills-boolets">
                code
                </span>TypeScript</li>
              <li className="skills__item">
                <span className="material-symbols-outlined skills-boolets">
                code
                </span>Redux</li>
              <li className="skills__item">
                <span className="material-symbols-outlined skills-boolets">
                code
                </span>HTML 5</li>
            </ul>

            <ul className="skills__list grid-item">
              <li className="skills__item">
                <span className="material-symbols-outlined skills-boolets">
                code
                </span>CSS 3</li>
              <li className="skills__item">
                <span className="material-symbols-outlined skills-boolets">
                code
                </span>Sass (SCSS)</li>
              <li className="skills__item">
                <span className="material-symbols-outlined skills-boolets">
                code
                </span>BEM</li>
              <li className="skills__item">
                <span className="material-symbols-outlined skills-boolets">
                code
                </span>NPM</li>
              <li className="skills__item">
                <span className="material-symbols-outlined skills-boolets">
                code
                </span>Git/Github</li>
            </ul>

            <ul className="skills__list grid-item">
              <li className="skills__item">
                <span className="material-symbols-outlined skills-boolets">
                code
                </span>Bootstrap</li>
              <li className="skills__item">
                <span className="material-symbols-outlined skills-boolets">
                code
                </span>Bulma</li>
              <li className="skills__item">
                <span className="material-symbols-outlined skills-boolets">
                code
                </span>Figma</li>
              <li className="skills__item">
                <span className="material-symbols-outlined skills-boolets">
                code
                </span>Chrome Dev Tools</li>
              <li className="skills__item">
                <span className="material-symbols-outlined skills-boolets">
                code
                </span>WEB</li>
            </ul>

            <ul className="skills__list grid-item">
              <li className="skills__item">
                <span className="material-symbols-outlined skills-boolets">
                code
                </span>AJAX</li>
              <li className="skills__item">
                <span className="material-symbols-outlined skills-boolets">
                code
                </span>Fetch</li>
              <li className="skills__item">
                <span className="material-symbols-outlined skills-boolets">
                code
                </span>REST API</li>
              <li className="skills__item">
                <span className="material-symbols-outlined skills-boolets">
                code
                </span>SQL(basic)</li>
              <li className="skills__item">
                <span className="material-symbols-outlined skills-boolets">
                code
                </span>OOP(basic)</li> */}
            </ul>
          </div>
        </div>
      </section>
  )
}