import PokemonApi from 'pokedex-promise-v2';

const api = new PokemonApi();

export default {

  /**
   * Returns all the pokemon
   *
   * @returns {Promise.<[{}]>}
   */
  async all() {
    const response = await api.getPokemonsList();
    return response.results;
  },

  /**
   * Finds a single pokemon by name
   *
   * @param {String} name
   * @returns {Promise.<{}>}
   */
  async findOneByName(name) {
    return await api.getPokemonByName(name);
  },

  async log(values = []) {
    return (await values)
      .forEach(value => {
        console.log(value);
      });
  },

  async addToBeginning(array = [], value) {
    return await [value, ...array];
  },

  async addToEnding(array = [], value) {
    return await [...array, value];
  },

  async addToMiddle(array, startingIndex, value) {
    const index = startingIndex + 1;

    const first = array.slice(0, index);
    const second = array.slice(index);

    return await [...first, value, ...second];
  },


  async biggestToSmallest(array) {
    return await [...array].sort((a, b) => b - a);
  },

  async removeDuplicates(array) {
    return await [...new Set(array)];
  },

  /**
   * Starts with a name
   *
   * @param name
   * @returns {Promise.<*|Array.<T>>}
   */
  async startsWith(name) {
    name = name.toLowerCase();
    // There is a better way to do this (look at the .map function)
    return (await this.all())
      .filter(pokemon => pokemon.name.startsWith(name));
  },

  /**
   * Ends with a name
   *
   * @param name
   * @returns {Promise.<void>}
   */
  async endsWith(name) {
    name = name.toLowerCase();

    return (await this.all())
      .filter(pokemon => pokemon.name.endsWith(name));
  }
}
