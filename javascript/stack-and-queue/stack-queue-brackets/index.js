function validateBrackets(string) {
  const stack = [];
  const brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  function isOpenBracket(char) {
    return "({[".includes(char);
  }

  function isCloseBracket(char) {
    return ")}]".includes(char);
  }

  for (let char of string) {
    if (isOpenBracket(char)) {
      stack.push(char);
    } else if (isCloseBracket(char)) {
      const lastOpeningBracket = stack.pop();
      const ClosingBracket = brackets[lastOpeningBracket];

      if (ClosingBracket !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

module.exports = { validateBrackets };
