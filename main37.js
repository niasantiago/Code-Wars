function age(x, y) {
    const brotherAge = x / (y - 1);
    const julieAge = brotherAge + x;
    return Math.round(julieAge);
  }
  