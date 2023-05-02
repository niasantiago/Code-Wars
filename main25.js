function highAndLow(numbers){
    // convert the string of numbers into an array of numbers
    let numArr = numbers.split(" ").map(Number);
  
    // find the highest number in the array
    let highest = Math.max(...numArr);
  
    // find the lowest number in the array
    let lowest = Math.min(...numArr);
  
    // return the highest and lowest numbers as a string
    return `${highest} ${lowest}`;
  }
  