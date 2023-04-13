const binaryArrayToNumber = arr => {
    const binaryString = arr.join('');
    const decimalValue = parseInt(binaryString, 2);
    return decimalValue;
  }; 