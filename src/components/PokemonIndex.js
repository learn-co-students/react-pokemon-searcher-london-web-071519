import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {



  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={e => this.props.updateSearchTerm(e.target.value)} showNoResults={false} />
        <br />
        <PokemonForm />
        <br />
      
        <PokemonCollection pokemons={this.props.pokemons}/>
      </div>
    )
  }
}

export default PokemonPage
