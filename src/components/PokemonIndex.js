import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import API from '../api'


class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchValue: ''
  }

  componentDidMount() {
    API.getPokemons()
    .then(pokemons => this.setState({pokemons}))
    .catch(error => alert(error.message))
  }

  filteredPokemon = (pokemons, filterVal) => {
    const filteredPokemons = [...pokemons].filter(pokemon => pokemon.name.includes(filterVal))
    return filteredPokemons
  }
  
  handleSearchChange = event => {
    event.persist()
    this.setState({searchValue: event.target.value})

  }

  createNewPokemon = state => {
    API.createPokemon({
      name: state.name,
      stats: [{
        value: state.hp,
        name: 'hp'
      }],
      sprites: {
        front: state.frontUrl,
        back: state.backUrl
      }
    })
    .then(pokemon => {
      const newPokemons = [...this.state.pokemons, pokemon]
      this.setState({pokemons: newPokemons})
    })
  }

  render() {
    const {pokemons, searchValue} = this.state
    const {handleSearchChange, filteredPokemon, createNewPokemon} = this

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm createNewPokemon={createNewPokemon}/>
        <br />
        <Search onSearchChange={handleSearchChange} value={searchValue} />
        <br />
        <PokemonCollection pokemons={filteredPokemon(pokemons, searchValue)}/>
      </div>
    )
  }
}

export default PokemonPage
