function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) {
      return [];
    }
  
    let positives = 0;
    let negatives = 0;
  
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        positives++;
      } else if (input[i] < 0) {
        negatives += input[i];
      }
    }
  
    return [positives, negatives];
  }
  