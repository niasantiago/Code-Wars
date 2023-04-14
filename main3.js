function sumTwoSmallestNumbers(numbers) {
    // Sort the array in ascending order
    numbers.sort(function(a, b) {
      return a - b;
    });
    
    // Add the two smallest numbers
    return numbers[0] + numbers[1];
  }
  