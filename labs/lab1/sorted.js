var SortedList = (function(comparator) {
  var array = [];
  return {
    insert: function(element) {
      var i = 0;
      var len = array.length;
      // Find where to insert
      while (i < len && comparator(array[i], element) < 0) {
        i++;
      }
      // Shift everything to right one position to the right
      for (var j = len; j > i; j--) {
        array[j] = array[j - 1];
      }
      // Add the new element
      array[i] = element;
    },
    toString: function() {
      var s = '[ ';
      for (var i in array) {
        s += array[i];
        if (i != array.length - 1) {
          s += ', ';
        }
      }
      return s + ' ]';
    },
  }
});

/*
 * Same function can be used for numbers and strings in Javascript
 * Just need a type-appropriate comparator when creating
 */
var numbers = SortedList(function(a, b) {
  return a - b;
});
// Some test values (unsorted)
var samples1 = [1, 10, 4, 2, 3, 6, 5, 8, 7, 9, 0 ];
for (var i in samples1) {
  numbers.insert(samples1[i]);
}
console.log(numbers.toString());

var strings = SortedList(function(a, b) {
  return a.localeCompare(b);
});
// Some test values (unsorted)
var samples2 = ['red', 'green', 'blue', 'indigo', 'violet', 'white'];
for (var i in samples2) {
  strings.insert(samples2[i]);
}
console.log(strings.toString());
