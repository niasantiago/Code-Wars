function sumFactorial(arr) {
    // Initialize a variable to keep track of the sum of factorials
    let sum = 0;
  
    // Loop through each element in the input array
    for (let i = 0; i < arr.length; i++) {
      // Initialize a variable to compute the factorial of the current element
      let factorial = 1;
  
      // Compute the factorial of the current element using a nested loop
      for (let j = arr[i]; j > 1; j--) {
        factorial *= j;
      }
  
      // Add the factorial of the current element to the sum of factorials
      sum += factorial;
    }
  
    // Return the sum of factorials
    return sum;
  }
  