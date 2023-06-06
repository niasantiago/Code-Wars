function solution(start, finish) {
    // Base case: If the start and finish shelves are the same, no jumps are needed
    if (start === finish) {
      return 0;
    }
    
    // If the finish shelf is within one or two jumps from the start shelf, return the number of jumps directly
    if (finish - start <= 2) {
      return finish - start;
    }
    
    // Otherwise, make a jump of three shelves and recursively find the minimum number of jumps for the remaining distance
    return 1 + solution(start + 3, finish);
  }
  