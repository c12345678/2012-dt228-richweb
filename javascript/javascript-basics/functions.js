var f = function() {
  console.log('Hello, world');
};
f();

(function(i) {
  console.log(i);
})(10);


var g = (function(j) {
  return function() {
    return j;
  }
})(20);
console.log(g);
console.log(g());
