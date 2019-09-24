import React from 'react'
import PokemonCardFront from './PokemonCardFront'
import PokemonCardBack from './PokemonCardBack'

class PokemonCard extends React.Component {

    state = {
        cardSide: 'front'
    }

    flipCard = () => {
        this.setState({cardSide: this.state.cardSide === 'front' ? 'back' : 'front'})
    }

   render() {
       const {pokemon} = this.props
       const {cardSide} = this.state
       const {flipCard} = this
       return (
           <React.Fragment>
               {cardSide === 'front' ? <PokemonCardFront pokemon={pokemon} flipCard={flipCard}/> : <PokemonCardBack pokemon={pokemon} flipCard={flipCard}/>}
           </React.Fragment>
        )
   }
}

export default PokemonCard