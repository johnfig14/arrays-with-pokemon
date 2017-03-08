import PokemonApi from 'pokedex-promise-v2';

const api = new PokemonApi();

export default {

  /**
   * Returns all items
   *
   * @public
   *
   * @returns {Promise.<[{}]>}
   */
  async all() {
    return (await api.getItemsList()).results;
  }
}
