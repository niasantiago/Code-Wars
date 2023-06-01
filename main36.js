function makeLatinSquare(n) {
    const latinSquare = new Array(n).fill(0).map(() => new Array(n).fill(0));
  
    // Generate the first row
    for (let i = 0; i < n; i++) {
      latinSquare[0][i] = i + 1;
    }
  
    // Generate subsequent rows
    for (let row = 1; row < n; row++) {
      for (let col = 0; col < n; col++) {
        latinSquare[row][col] = latinSquare[row - 1][(col + 1) % n];
      }
    }
  
    return latinSquare;
  }
  