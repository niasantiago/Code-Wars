function rentalCarCost(days) {
    let totalCost = days * 40; // calculate the base cost
    
    // apply the discounts
    if (days >= 7) {
      totalCost -= 50;
    } else if (days >= 3) {
      totalCost -= 20;
    }
    
    return totalCost;
  }
  