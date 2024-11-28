//Write a program to remove duplicates from an array

// Set Methode
function removeDuplicatesBySet(arr) {
  return [...new Set(arr)];
}

//filter methode
function removeDuplicatesByFilter(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

function removeDuplicatesByReduce(arr) {
  return arr.reduce((element, item) => {
    if (!element.includes(item)) {
      element.push(item);
    }
    return element;
  }, []);
}

function removeDuplicatesBySetInObj(arr, key) {
  const seen = new Set();
  const duplicates = arr.filter((item) => {
    const dup = seen.has(item[key]);
    seen.add(item[key]);
    return !dup;
  });
  return duplicates;
}

const arr = [1, 2, 3, 4, 3, 2, 1];
const array = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Alice" },
  { id: 3, name: "Charlie" },
  { id: 2, name: "Bob" },
];

console.log(removeDuplicatesBySet(arr), "===> Set Methode");
console.log(removeDuplicatesByFilter(arr), "===> Filter Methode");
console.log(removeDuplicatesByReduce(arr), "===> Reduce Methode");
console.log(removeDuplicatesBySetInObj(array, "id"), "===> set Methode in Obj");
