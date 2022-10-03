(function () {
  "use strict";

  // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.

  // TODO: Create a log statement that will log the number of elements in the names array.

  // TODO: Create log statements that will print each of the names array elements individually.

  const names = ["Jack", "Betty", "Bob", "John"];

  console.log(names.length);

  for (const element of names) {
    console.log(element);
  }

  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }

  names.forEach(name => console.log(name));
})();
