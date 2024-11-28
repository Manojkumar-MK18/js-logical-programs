//Find the max count of consecutive 1’s in an array

function findMaxConsuctiveNumber(arr) {
  let maxCount = 0;
  let currentCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      currentCount++;
      maxCount = Math.max(maxCount, currentCount);
    } else {
      currentCount = 0;
    }
  }
  return maxCount;
}

const input = [1, 1, 0, 1, 1, 1, 1, 0, 1, 1];
const result = findMaxConsuctiveNumber(input);
console.log("Maximum consecutive 1's:", result);
