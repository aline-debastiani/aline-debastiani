import React, { Component } from 'react';

class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image } = this.props.pokemon;
        return (
            <section className='pokemon'>
                <h3>{name}</h3>
                <p>{type}</p>
                <p>{`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
                <img src={image} alt='Imagem do pokemon'/>
            </section>
        )
    }
}

export default Pokemon;