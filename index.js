// Checking if the string is unique...

function CheckUnique(Str) {
  let checker = 0;

  for (let i = 0; i < Str.length; i++) {
    let positionOfChar = Str.charCodeAt(i) - "a".charCodeAt(0);
    if ((checker & (1 << positionOfChar)) > 0) {
      return false;
    }

    checker |= 1 << positionOfChar;
  }
  return true;
}

// console.log(CheckUnique("Kalk"));

/* Check if One string is the permutation of the other: 
For example god == dog , we will do it using bitwise operator again. */

function CheckPermutation(Str1, Str2) {
  if (CheckbtiwiseValues(Str1) == CheckbtiwiseValues(Str2)) {
    return true;
  }
  return false;
}

function CheckbtiwiseValues(Str1) {
  let checker = 0;

  for (let i = 0; i < Str1.length; i++) {
    let positionOfChar = Str1.charCodeAt(i) - "a".charCodeAt(0);

    checker |= 1 << positionOfChar;
  }
  return checker;
}
console.log(CheckPermutation("god", "dogy"));
