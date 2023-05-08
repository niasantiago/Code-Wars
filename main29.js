function sum(numbers) {
    "use strict";
    const numericValues = numbers.filter((n) => typeof n === "number");
    return numericValues.reduce((acc, curr) => acc + curr, 0);
  } 