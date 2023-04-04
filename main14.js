function hero(bullets, dragons) {
    // Each dragon takes 2 bullets to defeat
    var bulletsNeeded = dragons * 2;
  
    // Check if the hero has enough bullets to defeat all the dragons
    if (bullets >= bulletsNeeded) {
      return true; // Hero will survive
    } else {
      return false; // Hero will not survive
    }
  }
  