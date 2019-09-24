import React from 'react'
import { Card } from 'semantic-ui-react'


const PokemonCardBack = ({pokemon, flipCard}) => 
      <Card onClick={flipCard}>
          <div>
            <img src={pokemon.sprites.back} alt="oh no!" />
          </div>
      </Card>


export default PokemonCardBack
