function romanNumeral(string) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  // type your code here
  let current = 0;
  let result = 0;
  for (let i = string.length - 1; i >= 0; i--) {
    if (i != 0 && romanNumerals[string[i - 1]] >= romanNumerals[string[i]]) {
      result += romanNumerals[string[i]];
    } else if (i != 0) {
      result += romanNumerals[string[i - 1] + string[i]];
      i -= 1;
      continue;
    } else {
      result += romanNumerals[string[i]];
    }
  }
  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral("I"));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral("IX"));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral("CDII"));

  console.log("");

  console.log("Expecting: 1989");
  console.log(romanNumeral("MCMLXXXIV"));

  console.log(romanNumeral("MMMMMMMMMCMXCIX"));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution
