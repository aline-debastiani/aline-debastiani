import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './pokedex';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Pokedex pokemons={pokemons} />
      </div>
    );
  }
}

export default App;
