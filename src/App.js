import React from 'react'
import PokemonIndex from './components/PokemonIndex'
import './App.css'

class App extends React.Component {

  state = {
    pokemons: [],
    searchTerm: ""
  }


  updateSearchTerm = (letters) => {
    this.setState({searchTerm: letters})
  }


getPokemon = () =>{ 
  return fetch("http://localhost:3000/pokemon")
  .then(resp => resp.json())
  .then(pokemons => this.setState({ pokemons }))
}  

getFilteredPokemons = () => {
if (this.state.searchTerm !== "") {
  return this.state.pokemons.filter(pokemon =>
  pokemon.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())) }
  else return this.state.pokemons
}

componentDidMount () {
  this.getPokemon()
}

  render () {
  const getFiltered = this.getFilteredPokemons()
  return (
  <div className="App">
    <PokemonIndex 
   updateSearchTerm={this.updateSearchTerm}
    pokemons={getFiltered}/>
  </div>

)}
 }

export default App
