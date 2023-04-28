var findMissing = function(list) {
    // calculate the common difference between consecutive terms
    var diff = (list[list.length-1] - list[0]) / list.length;
  
    // iterate over the list starting from the second element
    for (var i = 1; i < list.length; i++) {
      // if the difference between current and previous element is not equal to the common difference
      if (list[i] - list[i-1] !== diff) {
        // return the missing term (previous element + common difference)
        return list[i-1] + diff;
      }
    }
  };
  