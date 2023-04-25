// Define a function called periodIsLate that takes three parameters: last (the Date object with the date of the last period), today (the Date object with the date of the check), and cycleLength (an integer representing the length of the cycle in days).
function periodIsLate(last, today, cycleLength) {
    // Calculate the time difference between the last period and today using the Math.abs() function. This gives us the absolute value of the time difference in milliseconds.
    const diffTime = Math.abs(today - last);
    
    // Convert the time difference to days using the formula (time difference in milliseconds) / (1000 milliseconds * 60 seconds * 60 minutes * 24 hours). We use Math.ceil() to round up the number of days to the nearest integer.
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    
    // If the number of days passed since the last period is greater than the cycle length, return true. Otherwise, return false.
    return diffDays > cycleLength;
  }
  