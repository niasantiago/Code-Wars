function reverseWords(str) {
    // Split the string into an array of words
    const words = str.split(' ');
  
    // Reverse each word in the array
    const reversedWords = words.map(word => {
      // Split the word into an array of characters
      const characters = word.split('');
  
      // Reverse the array of characters
      const reversedCharacters = characters.reverse();
  
      // Join the array of characters back into a string
      const reversedWord = reversedCharacters.join('');
  
      return reversedWord;
    });
  
    // Join the array of reversed words back into a string
    const reversedString = reversedWords.join(' ');
  
    return reversedString;
  }
  