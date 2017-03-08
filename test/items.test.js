import Test from 'ava';
import Items from '../src/items';

Test(`all()`, async t => {
  const items = await Items.all();
  t.truthy(items instanceof Array);
  t.falsy(items.length === 0);
});

