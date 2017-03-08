import Test from 'ava';
import Pokemons from '../src/pokemons';

Test(`all()`, async t => {
  const results = await Pokemons.all();
  t.truthy(results instanceof Array);
});

Test(`startsWith(name)`, async t => {
  const results = await Pokemons.startsWith('bu');
  t.truthy(results instanceof Array);
  t.falsy(results.length === 0);
});

Test(`endsWith(name)`, async t => {
  const results = await Pokemons.endsWith('aur');
  t.truthy(results instanceof Array);
  t.falsy(results.length === 0);
});

Test(`filterByName(name)`, async t => {
  const results = await Pokemons.findOneByName('eevee');
  t.truthy(results);
});

Test(`addToBeginning([], 'a')`, async t => {
  const nada = [];
  const results = await Pokemons.addToBeginning(nada, 'a');
  t.truthy(nada.length === 0);
  console.log(results);
  t.truthy(results.length === 1);
});
