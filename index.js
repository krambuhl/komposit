function komposit(func) {
  var funcs = Array.isArray(func) ? func : [].slice.apply(arguments);
  return function() {
    var tape = [].slice.apply(arguments);
    funcs.forEach(function(f) {
      tape = [f.apply(this, tape)];
    }, this);
    return tape[0];
  };
}

module.exports = komposit;
