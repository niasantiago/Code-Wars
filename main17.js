function removeEveryOther(arr) {
    // Use the filter method to create a new array
    return arr.filter((element, index) => {
      // Include the first element, and every other element thereafter
      return index === 0 || index % 2 === 0;
    });
  }
  