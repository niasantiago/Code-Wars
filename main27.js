function high(x) {
    // Split the input string into an array of words
    const words = x.split(" ");
    
    // Initialize variables to keep track of the highest scoring word and its score
    let highestWord = "";
    let highestScore = 0;
    
    // Iterate over each word in the array
    for (let i = 0; i < words.length; i++) {
      // Calculate the score of the current word
      const word = words[i];
      let score = 0;
      for (let j = 0; j < word.length; j++) {
        const letterScore = word.charCodeAt(j) - 96;
        score += letterScore;
      }
      
      // Check if the current word has a higher score than the current highest
      if (score > highestScore) {
        highestWord = word;
        highestScore = score;
      }
    }
    
    return highestWord;
  }
  