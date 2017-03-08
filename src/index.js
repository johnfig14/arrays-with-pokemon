import PokemonApi from 'pokedex-promise-v2';

const api = new PokemonApi();

export default {

  async all() {
    const response = await api.getPokemonsList();
    return response.results;
  },

  async startsWith(name) {
    const pokemons = await this.all();
    return pokemons.filter(pokemon => pokemon.name.startsWith(name));
  }

}
