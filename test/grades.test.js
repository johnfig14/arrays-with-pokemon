import Test from 'ava';
import Grades from '../src/grades';

Test(`map() grades array to and object of grades`, async t => {
  const original = [50, 75, 80, 90, 95];
  const results = await Grades.transform(original);

  t.deepEqual(results[0], { score: 50 });
});

Test(`map() grades array to and object of grades`, async t => {
  const original = [50, 75, 80, 80, 85];
  const results = await Grades.addCurveToGrade(original);

  t.deepEqual(results[0], { score: 60 });
});
