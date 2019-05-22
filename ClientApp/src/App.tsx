import React, { Component } from 'react';
import  {BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import SuperHero from './entity/SuperHero/Superhero';
import ListHeros from './entity/SuperHero/ListHeros';
export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <BrowserRouter>
        <Route to='/' exact component={Home}/>
        <Route path='/superheroes' exact component={ListHeros}/>
        <Route path='/superhero' exact component={SuperHero}/>
        <Route path='/superhero/:id' exact render={(props) => (<SuperHero id={props.match.params.id}/>)}/>
      </BrowserRouter>
    );
  }
}
