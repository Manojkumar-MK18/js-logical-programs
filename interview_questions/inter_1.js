function findPairs(arr, target) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  return result;
}

let array = [2, 7, 5, 3, 4];
let targ = 9;

console.log(findPairs(array, targ), "==>findPairsNested");
