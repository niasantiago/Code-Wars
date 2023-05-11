function longest(s1, s2) {
    // Combine s1 and s2 into a single string
    const combinedString = s1 + s2;
  
    // Create a Set from the combined string to remove duplicates
    const distinctLetters = [...new Set(combinedString)];
  
    // Sort the distinct letters and join them into a string
    const sortedString = distinctLetters.sort().join('');
  
    // Return the sorted string
    return sortedString;
  }
   // 2nd solution 
  const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')