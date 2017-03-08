import Test from 'ava';
import Pokemon from '../src';

Test(`all()`, async t => {
  const response = await Pokemon.all();
  t.truthy(response instanceof Array);
});

Test(`startsWith()`, async t => {
  const response = await Pokemon.startsWith('Bu');
  t.truthy(response instanceof Array);
});
