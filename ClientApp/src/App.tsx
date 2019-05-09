import React, { Component } from 'react';
import Superhero from './entity/SuperHero/Superhero';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Superhero />
    );
  }
}
