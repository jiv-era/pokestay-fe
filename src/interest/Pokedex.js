import React from 'react'
import Navbar from '../global/Navbar.js'
// import PokemonCard from './PokemonCard.js'



class Pokedex extends React.Component{

    state = {
        pokemon: {}
    }


    componentDidMount(){
        this.getPokemon();
    }

    getPokemon = () => {
        fetch("")
    }




    render(){
        return(
            <div>
            <Navbar />
            <h1>Pokemons</h1>
            </div>
        );
    }




}


export default Pokedex;


