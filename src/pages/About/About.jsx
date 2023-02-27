import React from 'react'
import './About.css'
import '../../index.css'

export const About = () => {
  return (
    <section className="about" id="about">
        <div className="container">

          <h2 className="about__title title-secondary">About</h2>

          <p className="about__text">
            Hey, I'm Vlada! I'm a Software Developer with a year of practice in Frontend and I'm looking for new professional opportunities in Frontend development. Got experience working with <b>HTML5, CSS3, Sass (SCSS), JavaScript, Typescript, React, and Bulma framework.</b>  Eager to improve my developer skills and learn new frameworks <b>(Vue/Angular/React Native)</b>. I have a basic knowledge of <b>SQL</b> (ORDER BY, LIMIT, DISTINCT, NULL, LIKE, BETWEEN, IN, WHERE, JOIN), and OOP. My productivity is high even if I work under strict deadlines. For example, I got my new profession as a FrontEnd developer in 1 year. My customer support background enhanced my problem-solving and communication skills. I have a great level of responsibility, and my work always meets the client's or company's requirements.
          </p>

          <p>
            {`You can check out my projects in the `}
            <span className="about-span">
              <a href="#projects">Projects</a>
            </span> section.
          </p>

        </div>
      </section>
  )
}