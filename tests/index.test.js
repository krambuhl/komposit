var komposit = require('../index.js');
var test = require('tape');

var not = function(thing) { return !thing; };
var and = function(a, b) { return a && b; };

test('komposit(func)', function (t) {
  t.plan(1);
  var res = komposit(and)(true, true);
  t.equal(res, true);
});

test('komposit(func, func)', function (t) {
  t.plan(1);
  var res = komposit(and, not)(true, true);
  t.equal(res, false);
});

test('komposit([func, fun])', function (t) {
  t.plan(1);
  var res = komposit([and, not])(true, true);
  t.equal(res, false);
});
