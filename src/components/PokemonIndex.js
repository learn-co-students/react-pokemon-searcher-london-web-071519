import React from 'react';
import PokemonCollection from './PokemonCollection';
import PokemonForm from './PokemonForm';
import {Search} from 'semantic-ui-react';
import _ from 'lodash';

class PokemonPage extends React.Component {
	state = {pokemons: [], searchTerm: ''};
	savePokes = (pokemons) =>
		this.setState({
			pokemons: pokemons.map((poke) => ({
				name: poke.name,
				hp: poke.stats.find((s) => s.name === 'hp').value,
				sprites: poke.sprites
			}))
		});

	componentDidMount() {
		fetch('http://localhost:4000/pokemon')
			.then((resp) => resp.json())
			.then(this.savePokes);
	}

	updateSearchTerm = (value) => this.setState({searchTerm: value});

	filteredPokemons = () =>
		this.state.searchTerm.length > 0
			? this.state.pokemons.filter((poke) =>
					poke.name
						.toLowerCase()
						.includes(this.state.searchTerm.toLowerCase())
			  )
			: this.state.pokemons;

	addPokemon = (pokemon) => {
		console.log(pokemon);
		fetch('http://localhost:4000/pokemon', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify(pokemon)
		})
			.then((response) => response.json())
			.then((resp) =>
				this.setState({pokemons: [...this.state.pokemons, resp]})
			);
	};

	render() {
		return (
			<div>
				<h1>Pokemon Searcher</h1>
				<br />
				<PokemonForm handleSubmit={this.addPokemon} />
				<br />
				<Search
					onSearchChange={_.debounce(
						(e, {value}) => this.updateSearchTerm(value),
						500
					)}
					showNoResults={false}
				/>
				<br />
				<PokemonCollection pokemons={this.filteredPokemons()} />
			</div>
		);
	}
}

export default PokemonPage;
