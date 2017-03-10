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

Test(`map() grades array to and object of grades`, async t => {
  const original = [50, 75, 80, 80, 85];
  const results = await Grades.addCurveToGrade(original);

  t.deepEqual(results[0], { score: 60 });
});

Test(`map() grades array to and object of grades`, async t => {
  const original = [50, 75, 80, 80, 85];
  const results = await Grades.addMoreCurveToGrade(original);

  t.deepEqual(results[0], { score: 80 });
});

Test(`map() grades array to and object of grades`, async t => {
  const original = [50, 75, 80, 80, 85];
  const results = await Grades.subtractCurveToGrades(original);

  t.deepEqual(results[0], { score: -20});
});




Test(`Testing equality - Integer`, async t => {
  t.deepEqual([1, 2], [1, 2]);
  t.deepEqual([10, 20, 30], [10, 20, 30], [10, 20, 30]);
  t.deepEqual([50, 60, 70, 80], [50, 60, 70, 80], [50, 60, 70, 80], [50, 60, 70, 80]);
});

Test(`Testing equality - String`, async t => {
  t.deepEqual(["Ass", "Ass"], ["Ass", "Ass"]);
  t.deepEqual(["Assert", "Assert"], ["Assert", "Assert"]);
  t.deepEqual(["Assertion", "Assertion"], ["Assertion", "Assertion"]);
  t.deepEqual(["Assertation", "Assertation"], ["Assertation", "Assertation"]);
});

Test(`Test equality - Boolean`, async t => {
  t.deepEqual([true], [true], [true]);
  t.deepEqual([false], [false], [true]);
  t.deepEqual([true, true, [true, true]], [true, true, [true, true]], [true, true, [true, true]]);
  t.deepEqual([false, false, [false, false]], [false, false, [false, false]], [false, false, [false, false]]);
});

Test(`Test equality - Null`, async t => {
  t.deepEqual([null], [null], [null, null]);
  t.deepEqual([null, null], [null, null]);
  t.deepEqual([null, null, null], [null, null, null], [null, null, null]);
  t.deepEqual([null, [null, null]], [null, [null, null]], [null, [null, null]]);
});

Test(`Testing equality - Undefined`, t => {
  t.deepEqual([undefined], [undefined], [undefined], [undefined]);
  t.deepEqual([undefined, [undefined, undefined]], [undefined, [undefined, undefined]]);
});

Test(`Testing equality - Objects`, async t => {
  t.deepEqual({firstName: "John", lastName: "Fig"}, {firstName: "John", lastName: "Fig"});
});

Test(`Testing equality - Array`, async t => {
  t.deepEqual(["John", 1, true], ["John", 1, true]);
  t.deepEqual(["John", [1, 2, 3, [true, false]]], ["John", [1, 2, 3, [true, false]]]);
});

Test(`Testing equality - Sub-array`, async t => {
  t.deepEqual(["John", [1, 2, 3]], ["John", [1, 2, 3]]);
  t.deepEqual(["My Name", [ name = {firstName: "John", lastName: "Fig"} ], "My Name", [ name = {firstName: "John", lastName: "Fig" }]]);
});

Test(`Testing equality - `, t => {
  t.deepEqual([5 + 5], [25 + 25], [50 + 50], [75 + 75], [100 + 100]);
  t.deepEqual([5 - 5], [25 - 25], [50 - 50], [75 - 75], [100 - 100]);
  t.deepEqual([5 * 5], [25 * 25], [50 * 50], [75 * 75], [100 * 100]);
  t.deepEqual([5 / 5], [25 / 25], [50 / 50], [75 / 75], [100 / 100]);
});