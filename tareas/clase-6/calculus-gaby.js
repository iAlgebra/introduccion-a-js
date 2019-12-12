function calculateAverage(arr) {
  let result = 0;
  arr.forEach(function(e) {
    result += e;
  });
  return result / arr.length;
}

function findSmallestNumber(arr) {
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

function findBiggestNumber(arr) {
  let biggest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > biggest) {
      biggest = arr[i];
    }
  }
  return biggest;
}
