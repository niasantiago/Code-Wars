function triangular(n) {
    if (n <= 0) {
      return 0; // Return 0 for out of range values
    } else {
      return (n * (n + 1)) / 2; // Formula to calculate the nth triangular number
    }
  }
  