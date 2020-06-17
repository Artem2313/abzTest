import React, { Component } from 'react';
import AboutMe from './Section_About_Me/AboutMe';

export default class Main extends Component {
  state = {};

  render() {
    return (
      <div style={{ marginTop: '63px' }}>
        <AboutMe />
      </div>
    );
  }
}
