import PokemonApi from 'pokedex-promise-v2';

const api = new PokemonApi();

export default {

  async all() {
    return await api.getPokemonsList();
  }

}
