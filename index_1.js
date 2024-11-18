//Program to find longest word in a given sentence
function FindlargestNumber(sentence) {
  const words = sentence.split(" ");
  let largestWord = "";

  for (const word of words) {
    if (word.length > largestWord.length) {
      largestWord = word;
    }
  }

  return largestWord;
}

//Program to find small word in a given sentence
function FindSmallNumber(sentence) {
  const words = sentence.split(" ");
  let smallWord = words[0];

  for (const word of words) {
    if (word.length < smallWord.length) {
      smallWord = word;
    }
  }

  return smallWord;
}

const sentence = "Program to find longest word in a given sentence";
console.log(FindlargestNumber(sentence), "===>large word");
console.log(FindSmallNumber(sentence), "===>small word");
