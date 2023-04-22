function duplicateCount(text) {
    // convert all characters to lowercase for case-insensitive comparison
    text = text.toLowerCase();
  
    // initialize an empty object to store the count of each character
    var charCount = {};
  
    // loop through each character in the string
    for (var i = 0; i < text.length; i++) {
      var char = text[i];
  
      // increment the count of this character in the charCount object
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // count the number of characters that occur more than once
    var count = 0;
    for (var char in charCount) {
      if (charCount[char] > 1) {
        count++;
      } 
    }
  
    return count;
  }
  