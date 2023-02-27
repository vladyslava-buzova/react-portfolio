import React from 'react';
import { Card } from '../../components/Card/card';
import '../../index.css'
import './Projects.css';

export const Projects = () => {
  return (
    <section id="projects" className="portfolio-section">
      <div className="container">
        <h2 className="title-secondary">Projects</h2>
        <div className="portfolio-wrap">
          <Card />
        </div>
      </div>
    </section>
  )
}
