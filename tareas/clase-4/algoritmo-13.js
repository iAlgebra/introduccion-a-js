/*
Desafío de programación #13: Find the maximum number in an array of numbers
*/

let listOfNumbers = [100, 3000, -852, 69, 5000, -5900];

function findTheMaxNumber(arr) {
  let maxNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}

console.log(findTheMaxNumber(listOfNumbers));
