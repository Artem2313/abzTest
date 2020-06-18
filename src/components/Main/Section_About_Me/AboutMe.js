import React from 'react';
import { title, textDesktop, textMobile } from './AboutMeText.json';
import './AboutMe.scss';

const AboutMe = () => (
  <section className="aboutme">
    <div className="aboutme__container">
      <h1>{title}</h1>
      <p className="desktop">{textDesktop}</p>
      <p className="mobile">{textMobile}</p>
      <button type="button" className="button aboutme__button">
        Sign up now
      </button>
    </div>
  </section>
);

export default AboutMe;
