function isBalanced(parenthesis) {
  const stack = [];
  for (const par of parenthesis) {
    if (par == "(") {
      stack.push(par);
    } else if (par == ")") {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}

console.log(isBalanced("(()"));
