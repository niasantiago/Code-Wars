function solution(number) {
    // Check if the input number is negative
    if (number < 0) {
      // If it is, return 0
      return 0;
    }
    
    // Initialize a variable to keep track of the sum
    let sum = 0;
    
    // Iterate from 1 to one less than the input number
    for (let i = 1; i < number; i++) {
      // Check if the current number is a multiple of 3 or 5
      if (i % 3 === 0 || i % 5 === 0) {
        // If it is, add it to the sum
        sum += i;
      }
    }
    
    // Return the sum of all multiples of 3 or 5 below the input number
    return sum;
  }
  