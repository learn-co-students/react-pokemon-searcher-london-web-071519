import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }
  
 updateName = e => 
    this.setState({ 
      name: e.target.value,
    })
 

 updateHP = e => 
  this.setState({ 
    hp: e.target.value
  })
 

updateFrontUrl = e => 
  this.setState({ 
    frontUrl: e.target.value
})

updateBackUrl = e => 
  this.setState({ 
    backUrl: e.target.value
  })  

resetState = () => 
  this.setState({ 
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''}) 

postPokemon = () => {
  return fetch("http://localhost:3000/pokemon", {
    method: "POST", 
    headers: {
      'Content-Type': 'application/json'},
    body: JSON.stringify({
      "height": null,
      "weight": null,
      "id": null,
      "name": this.state.name,
      "abilities": [],
      "moves": [],
      "stats": [
        {
          "value": null,
          "name": null
        },
        {
          "value": null,
          "name": null
        },
        {
          "value": null,
          "name": null
        },
        {
          "value": this.state.hp,
          "name": 'hp'
        },
        {
          "value": null,
          "name": null
        },
        {
          "value": null,
          "name": null 
        }
      ],
      "types": null,
      "sprites": {
        "front": this.state.frontUrl, 
        "back": this.state.backUrl
      }})})
  .then(resp => resp.json()).then(resp => console.log(resp)).
  then(() => this.resetState())
 }



  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.postPokemon}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={e => this.updateName(e)}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={e => this.updateHP(e)}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={e => this.updateFrontUrl(e)}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={e => this.updateBackUrl(e)}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm




