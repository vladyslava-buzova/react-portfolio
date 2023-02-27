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
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
  )
}