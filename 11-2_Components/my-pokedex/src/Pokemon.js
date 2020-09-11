import React from 'react';
import './App.css';

class Pokemon extends React.Component {
  render() {

    const { image, name, type, averageWeight } = this.props.poke;

    return (
      <div className='pokemon'>
        {/* pokemons.map */}
        <img src={image} />
        <p>Nome: {name}</p>
        <p>Tipo: {type}</p>
        <p>Peso: {averageWeight.value}{averageWeight.measurementUnit}</p>
      </div>
    );
  }
}

export default Pokemon;
