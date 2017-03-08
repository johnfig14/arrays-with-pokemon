import PokemonApi from 'pokedex-promise-v2';

const api = new PokemonApi();

export default {

  async all() {
    const response = await api.getPokemonsList();
    return response.results;
  },

  /**
   * Make this case insensitive...
   *
   * @param name
   * @returns {Promise.<*|Array.<T>>}
   */
  async startsWith(name) {
    const pokemons = await this.all();
    return pokemons.filter(pokemon => pokemon.name.startsWith(name));
  },

  /**
   * Do the
   *
   *
   * @param name
   * @returns {Promise.<void>}
   */
  async endsWith(name) {

    // Do your stuff
  }
}
