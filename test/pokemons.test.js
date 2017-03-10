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


Test(`addToMiddle([], index, value)`, async t => {
  const results = await Pokemons.addToMiddle([1, 2, 3, 4], 2, 5);
  t.deepEqual([1, 2, 3, 5, 4], results);
});

Test(`biggestToSmallest([])`, async t => {
  const original = [1,2,3,4,5];
  const results = await Pokemons.biggestToSmallest([1,2,3,4,5]);

  t.deepEqual([1,2,3,4,5], original);
  t.deepEqual([5,4,3,2,1], results);
});

Test(`removeDuplicates([])`, async t => {
  const original = [1,1,2,2,3,3];
  const results = await Pokemons.removeDuplicates(original);
  
  console.log(results);
  t.deepEqual([1,1,2,2,3,3], original);
  t.deepEqual([1,2,3], results);
});