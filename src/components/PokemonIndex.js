import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'








class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchPokemon: " "
  }
  
  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(resp => resp.json())
    .then(pokemons => this.setState({pokemons}))
    
  }

  createNewPokemon = (name, hp ,frontImg, backImg) => {
    fetch("http://localhost:3000/pokemon", {
        "method": "POST", 
        "headers": {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        'body' : JSON.stringify({
            'name': name,
            'stats': [{
                'name': 'hp',
                'value': parseInt(hp, 10)
            }],
            'sprites':{
              'front': frontImg,
              'back': backImg
            }
        })
    })
    .then(resp => resp.json())
    .then(parsed => {
      console.log(parsed)
      this.setState({pokemons: [parsed,...this.state.pokemons]})
    })
  }

  changePokemonSprite = (pokemonId) => {
    const updatedPokemon = this.state.pokemons.map(pokemonObj => {
      if (pokemonObj.id === pokemonId) {
        if (pokemonObj.front) {
          pokemonObj.front = false
        } else {
          pokemonObj.front = true
        }
      }
      return pokemonObj
    })
    this.setState({ pokemon: updatedPokemon })
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      searchPokemon: e.target.value.trim().toLowerCase()
    })
  }

  filteredPokemon = () => {
   let newArray = [...this.state.pokemon]
   return newArray.filter( pokemon => pokemon.name.toLowerCase().includes(this.state.searchInput.toLowerCase()))
  }


  




//
  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(() => console.log('🤔'), 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={this.state.pokemons} changePokemonSprite={this.changePokemonSprite} filteredPokemon={this.filteredPokemon} />
        <br />
        <PokemonForm createNewPokemon={this.createNewPokemon} pokemon={this.state.pokemon}/>
      </div>
    )
  }
}

export default PokemonPage



