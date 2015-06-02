# komposit

For creating functional compositions.

## komposit(functions...)

Creates a composite function out of supplied argument functions.  `komposite(f,g,h)(x)` is equivalent to `h(g(f(x)))`

```js
var add10 = function (n) { return n + 10; };
var divideBy2 = function (n) { return n / 2; };

divideBy2(add10(20)) // 15

var add10AndDivideBy2 = komposit(add10, divide2);

add10AndDivideBy2(20) // 15
```
