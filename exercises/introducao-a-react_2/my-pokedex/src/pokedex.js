import React from 'react';
import Pokemon from './pokemon';

class Pokedex extends React.Component {
    render() {
        const { pokemons } = this.props;

        return (
            <section className='pokedex'>
                {pokemons.map(pokemon => {
                    return <Pokemon pokemon={pokemon} />
                })}
            </section>
        );
    }
}

export default Pokedex;