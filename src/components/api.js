const baseUrl = "http://localhost:3000/"

const pokemonUrl = "http://localhost:3000/pokemon"

const get = url => fetch(url).then(resp => resp.json())

const getPokemons = () => get(pokemonUrl)

window.getPokemons = getPokemons

export default { getPokemons }