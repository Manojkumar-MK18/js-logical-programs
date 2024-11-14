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

const sentence = "Program to find longest word in a given sentence";
console.log(FindlargestNumber(sentence));
