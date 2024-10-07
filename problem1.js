// Problem 1 – general logic
// Given an integer array – [6,13,22,18,0,3,45,57,5,12]
// Write a function that finds the second largest integer in the array using only a single
// loop, and outputs the result to the console.

function getSecondLargest(numbers) {
    
    let max = numbers[0];
    let secondMax = numbers[1];
  
    if (secondMax > max) {
     
      [max, secondMax] = [secondMax, max];
    }
  
    for (let i = 2; i < numbers.length; i++) {
      if (numbers[i] > max) {
        secondMax = max; 
        max = numbers[i];
      } else if (numbers[i] > secondMax && numbers[i] !== max) {
        secondMax = numbers[i];
      }
    }
  
    console.log("Second largest number", secondMax);
    return secondMax;
  }
  
  const numbers = [6, 13, 22, 18, 0, 3, 45, 57, 5, 12];
  getSecondLargest(numbers);
  
  