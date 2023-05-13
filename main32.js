function descendingOrder(n) {
    const digits = String(n).split(''); // Convert the number to a string and split it into an array of digits
    const sortedDigits = digits.sort((a, b) => b - a); // Sort the digits in descending order
    const result = sortedDigits.join(''); // Join the sorted digits back into a single string
    return parseInt(result); // Convert the result back to a number and return it
  }
  