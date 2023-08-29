import React from 'react'
import './About.css'
import '../../index.css'

export const About = () => {
  return (
    <section className="about" id="about">
        <div className="container">

          <h2 className="about__title title-secondary">About</h2>

          <p className="about__text">
            Hey, I'm Vlada! I'm a Software Developer with a year of experience in Frontend work looking for new challenges and professional opportunities. Have experience working with <b>HTML5, CSS3, Sass (SCSS), JavaScript, Typescript, React, and Bulma framework</b> and eager to improve my developer skills and learn new frameworks <b>(Vue/Angular/React Native)</b>. Have a basic knowledge of SQL  of <b>SQL</b> (ORDER BY, LIMIT, DISTINCT, NULL, LIKE, BETWEEN, IN, WHERE, JOIN), and OOP. My productivity level is high even while working under tight deadlines. My customer support background enhances my problem-solving and communication skills. Extremely responsible, and always strive to exceed the client's or company's requirements and expectations.
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