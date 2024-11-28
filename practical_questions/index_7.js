function mergeAndSort(arr1, arr2) {
  return arr1.concat(arr2).sort((a, b) => a - b);
}

function mergeWithSpread(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

const array1 = [0, 3, 4, 31];
const array2 = [4, 6, 30];

console.log(mergeAndSort(array1, array2), "==> mergeAndSort");
console.log(mergeWithSpread(array1, array2), "mergeWithSpread");
