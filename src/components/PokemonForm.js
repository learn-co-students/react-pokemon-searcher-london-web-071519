import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: null,
      hp: null,
      frontUrl: null,
      backUrl: null
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    debugger
    e.preventDefault()
    const inputField = e.target.children[0].children
    //debugger
    const newName = inputField[0].children[1].children[0].value
    const newHp = inputField[1].children[1].children[0].value
    const frontImg = inputField[2].children[1].children[0].value
    const backImg = inputField[3].children[1].children[0].value

    this.props.createNewPokemon(newName, newHp, frontImg, backImg)
    //e.target.reset()
  }



  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp"  value={this.state.hp} onChange={this.handleChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontImg} onChange={this.handleChange} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backImg} onChange={this.handleChange} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
