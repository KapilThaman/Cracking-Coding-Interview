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
// console.log(CheckPermutation("god", "dogy"));

function urlify(str, trueLength) {
    let result = '';
    
    for (let i = 0; i < trueLength; i++) {
      if (str[i] === ' ') {
        result += '%20'; 
      } else {
        result += str[i]; 
      }
    }
    return result; 
  }
  // Test the function
  let str = "Mr John Smith    ";
  let trueLength = 13;
//   console.log(urlify(str, trueLength));

// Check if the string is a permutation of a palendrome.

function isPermutationOfPalindrome(phrase) { debugger
    let countOdd = 0;
    const table = new Array(26).fill(0); // Array to store letter frequencies (26 letters in the alphabet)
    
    for (let char of phrase) {
        const x = getCharNumber(char);
        if (x !== -1) {
            table[x]++;
            if (table[x] % 2 === 1) {
                countOdd++;
            } else {
                countOdd--;
            }
        }
    }

    return countOdd <= 1;
}

function getCharNumber(c) {
    const charCodeA = 'a'.charCodeAt(0);
    const charCodeZ = 'z'.charCodeAt(0);
    const charCode = c.toLowerCase().charCodeAt(0);

    if (charCode >= charCodeA && charCode <= charCodeZ) {
        return charCode - charCodeA; // Map 'a' to 0, 'b' to 1, ..., 'z' to 25
    }
    return -1; // Non-letter characters
}

// Example usage
console.log(isPermutationOfPalindrome("Tact Ca")); // Output: true (because "Tact Coa" can be rearranged into "tacocat")
console.log(isPermutationOfPalindrome("hello"));    // Output: false