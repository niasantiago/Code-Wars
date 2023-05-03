function sortArray(array) {
    // Create a new array to store the odd numbers.
    const oddNumbers = [];
    
    // Loop through the array and find the odd numbers.
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 !== 0) {
        oddNumbers.push(array[i]);
      }
    }
    
    // Sort the odd numbers in ascending order.
    oddNumbers.sort((a, b) => a - b);
    
    // Loop through the array again and replace the odd numbers with the sorted ones.
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 !== 0) {
        array[i] = oddNumbers.shift();
      }
    }
    
    // Return the modified array.
    return array;
  }
  