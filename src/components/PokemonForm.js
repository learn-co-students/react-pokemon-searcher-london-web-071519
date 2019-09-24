import React from 'react'
import { Form } from 'semantic-ui-react'
import API from '../api'

class PokemonForm extends React.Component {

  state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.createNewPokemon(this.state)
    this.setState({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    })
  }

  handleNameChange = event => {
    this.setState({name: event.target.value})
  }

  handleHpChange = event => {
    this.setState({hp: event.target.value})
  }

  handleBackUrlChange = event => {
    this.setState({backUrl: event.target.value})
  }

  handleFrontUrlChange = event => {
    this.setState({frontUrl: event.target.value})
  }

  render() {
    const {name, hp, frontUrl, backUrl} = this.state
    const {handleNameChange, handleHpChange, handleFrontUrlChange, handleBackUrlChange} = this
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={handleNameChange}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={handleHpChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={frontUrl} onChange={handleFrontUrlChange}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={backUrl} onChange={handleBackUrlChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
