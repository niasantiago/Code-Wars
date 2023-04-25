function sumFactorial(arr){
    let sum = 0; // initialize sum variable to 0
    for (let i = 0; i < arr.length; i++) { // loop through each element in the array
      let factorial = 1; // initialize factorial variable to 1
      for (let j = 1; j <= arr[i]; j++) { // loop from 1 up to the current element in the array
        factorial *= j; // multiply the factorial by each number in the loop
      }
      sum += factorial; // add the factorial to the sum variable
    }
    return sum; // return the final sum
  }
  