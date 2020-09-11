import React from 'react';
import './App.css';
import Pokemon from './Pokemon.js';
import pokemons from './data.js';


function App() {
  return (
    <div className="App">
      {pokemons.map(poke => {
        return <Pokemon poke={poke} />
      })}
    </div>
  );
}

export default App;
