import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

const POKEMONURL = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {

  state = {
    pokemon : [],
    searchInput : ''
  }

  fetchPokemon = () => {
    return fetch(POKEMONURL)
    .then(resp => resp.json())
  }

  componentDidMount() {
    this.fetchPokemon()
    .then( pokemon => {
      this.setState({ pokemon })
    })
  }


  handleSearchChange = (e, { value }) => {
    this.setState({ searchInput : value})
  }

  searchedPokemons = () => {
    let newArray = [...this.state.pokemon]
    return newArray.filter( pokemon => pokemon.name.toLowerCase().includes(this.state.searchInput.toLowerCase()))
  }

 

  render() {
    
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearchChange, 500)} showNoResults={false} />
        
        <br />
        <PokemonForm />
        <br />
        <PokemonCollection pokemon={this.searchedPokemons()}/>
      </div>
    )
  }
}

export default PokemonPage
