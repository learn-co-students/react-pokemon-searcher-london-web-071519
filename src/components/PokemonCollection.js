import React from 'react'
import PokemonCard from './card/PokemonCard'
import { Card } from 'semantic-ui-react'

const PokemonCollection = ({pokemons}) => 
  <React.Fragment>
    <Card.Group itemsPerRow={6}>
        {pokemons.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
    </Card.Group>
  </React.Fragment>

export default PokemonCollection
