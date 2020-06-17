import React from 'react';
import { title, textDesktop } from './AboutMeText.json';

const AboutMe = () => (
  <main>
    <h1>{title}</h1>
    <p>{textDesktop}</p>
  </main>
);

export default AboutMe;
