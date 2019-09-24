const pokemonsURL = 'http://localhost:3000/pokemon'

const getPokemons = () => {
    return fetch(pokemonsURL)
            .then(resp => resp.json())
}

const createPokemon = state => {
    return fetch(pokemonsURL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(state)
    })
    .then(resp => resp.json())
    .catch(error => alert(error.message))
}

export default {getPokemons, createPokemon}