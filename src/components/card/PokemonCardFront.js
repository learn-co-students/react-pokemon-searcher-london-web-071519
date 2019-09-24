import React from 'react'
import { Card } from 'semantic-ui-react'


class PokemonCardFront extends React.Component {

  hpObj = this.props.pokemon.stats.find(stat => stat.name === 'hp')
  hpVal = this.hpObj.value

  render() {
    const {pokemon, flipCard} = this.props
    return (
      <Card onClick={flipCard}>
        <div>
          <div className="image">
            <img src={pokemon.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.hpVal}
            </span>
          </div>
        </div>
      </Card>
    )
  }  
}


export default PokemonCardFront
