import Test from 'ava';
import Pokemon from '../src';

Test(`all()`, async t => {
  const response = await Pokemon.all();
  console.log(response);
  t.truthy(response.results);
});
