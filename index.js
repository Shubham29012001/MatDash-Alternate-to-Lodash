import _ from "./matlib.js";

let arrayExample = [1, 2, 3, 4, NaN, false, 0, 100, -9];

var object = { a: [{ b: { c: 3 } }] };

// _.get({ object }, "a[0].b.c");
// // => 3

// _.get(object, ["a", "0", "b", "c"]);
// => 3

var object = { a: [{ b: { c: [1, 2, 3, 4] } }] };

console.log(_.indexof(["atul", 2, 1, "shubham"], "shubham", -1));
// => [2, 3]
