function comp(array1, array2){
  // Check if either array is null or undefined
  if (!array1 || !array2) {
    return false;
  }
  
  // Create a map to keep track of the frequency of each element in array1
  let map = new Map();
  for (let i = 0; i < array1.length; i++) {
    let num = array1[i];
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }
  
  // Check if the frequency of each squared element in array2 matches that in array1
  for (let i = 0; i < array2.length; i++) {
    let num = Math.sqrt(array2[i]);
    if (!map.has(num) || map.get(num) === 0) {
      return false;
    }
    map.set(num, map.get(num) - 1);
  }
  
  return true;
}

// short solution 
function comp(array1, array2) {
  return Array.isArray(array1) && Array.isArray(array2) && array1.length === array2.length && array1.every(num => array2.includes(num * num));
}

