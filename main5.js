function removeChar(str) {
    // Check if string has at least two characters
    if (str.length < 2) {
      return str; // Return original string if less than two characters
    }
    
    // Remove first and last characters using substring method
    return str.substring(1, str.length - 1);
  }
  