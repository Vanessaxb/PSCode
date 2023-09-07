function reverseString(str) {
  let reversedString = [];

  for (i = str.length - 1; i >= 0; i--) {
    if (str.charAt(i) === " ") {
      continue;
    }
    reversedString.push(str.charAt(i));
  }
  reversedString.toString();
  return reversedString;
}

module.exports = reverseString;
