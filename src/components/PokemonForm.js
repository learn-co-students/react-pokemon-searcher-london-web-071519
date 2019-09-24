import React from 'react'
import { Form } from 'semantic-ui-react'
const POKEMONURL = 'http://localhost:3000/pokemon'


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

  nameInputUpdate = (e) => {
    console.log(e.target.value)
    this.setState({
      name: e.target.value
    })
  }

  HPInputUpdate = (e) => {
    console.log(e.target.value)
    this.setState({
      hp: e.target.value
    })
  }

  frontUrlInputUpdate = (e) => {
    console.log(e.target.value)
    this.setState({
      frontUrl: e.target.value
    })
  }

  backUrlInputUpdate = (e) => {
    console.log(e.target.value)
    this.setState({
      backUrl: e.target.value
    })
  }

  handleSubmit = (e) => {

    let data =
    {
      "height": 4,
      "weight": 40,
      "name": this.state.name,
      "abilities": [
        null
      ],
      "moves": [
      ],
      "stats": [
        {
          "value": null,
          "name": null,
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
        }
      ],
      "types": [
        null
      ],
      "sprites": {
        "front": this.state.frontUrl,
        "back": this.state.backUrl
      }
    }





    fetch(POKEMONURL,
      {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });

    this.setState({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    })
  }




  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={e => { this.handleSubmit(e) }}>
          <Form.Group widths="equal">
            <Form.Input onChange={e => { this.nameInputUpdate(e) }} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input onChange={e => { this.HPInputUpdate(e) }} fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input onChange={e => { this.frontUrlInputUpdate(e) }} fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input onChange={e => { this.backUrlInputUpdate(e) }} fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
