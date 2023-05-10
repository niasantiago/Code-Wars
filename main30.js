function sumOfMinimums(arr) {
    // reduce the 2D array to a single value, starting with an initial sum of 0
    return arr.reduce((sum, row) => 
      // add to the sum the minimum value in each row using the spread operator
      sum + Math.min(...row), 0);
  }
  