function getCount(str) {
    // Define an array of vowels
    const vowels = ["a", "e", "i", "o", "u"];
    // Initialize a count variable to 0
    let count = 0;
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
      // Check if the character is a vowel
      if (vowels.includes(str[i])) {
        // If it is, increment the count
        count++;
      }
    }
    // Return the count of vowels
    return count;
  }
  