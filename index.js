// Checking if the string is unique...

function CheckUnique(Str) { 
  let checker = 0;

  for (let i = 0; i < Str.length; i++) {
    let positionOfChar = Str.charCodeAt(i) - "a".charCodeAt(0);
    if ((checker & (1 << positionOfChar)) > 0) {  //checker & 1<<positionCHar means shift left 1 in checker 
        console.log(1 << positionOfChar)
      return false;
    }

    checker |= 1 << positionOfChar;
  }
  return true;
}

// console.log(CheckUnique("kalk"));

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

function isPermutationOfPalindrome(phrase) { 
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
// console.log(isPermutationOfPalindrome("Tact ooCoa")); // Output: true (because "Tact Coa" can be rearranged into "tacocat")
// console.log(isPermutationOfPalindrome("hello"));    // Output: false

// One Edit Away

function oneEditAway(first, second) { debugger
    if (first.length === second.length) {
      return oneEditReplace(first, second);
    } else if (first.length + 1 === second.length) {
      return oneEditInsert(first, second);
    } else if (first.length - 1 === second.length) {
      return oneEditInsert(second, first);
    }
    return false;
  }
  
  function oneEditReplace(s1, s2) { debugger
    
    let foundDifference = false;
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) {
        if (foundDifference) {
          return false;
        }
        foundDifference = true;
      }
    }
    return true;
  }
  
  function oneEditInsert(s1, s2) { debugger
    let index1 = 0;
    let index2 = 0;
  
    while (index1 < s1.length && index2 < s2.length) {
      if (s1[index1] !== s2[index2]) {
        if (index1 !== index2) {
          return false;
        }
        index2++;
      } else {
        index1++;
        index2++;
      }
    }
  
    return true;
  }
  
  // Example usage
//   console.log(oneEditAway("pale", "ple")); // true
//   console.log(oneEditAway("pales", "pale")); // true
//   console.log(oneEditAway("pale", "bale")); // true
//   console.log(oneEditAway("pale", "bake")); // false


function stringCompression(str) { debugger
    if (!str || str.length === 0) return str; // Handle empty string
  
    let compressedArray = []; // Use array to build the compressed string
    let countConsecutive = 0;
  
    for (let i = 0; i < str.length; i++) {
      countConsecutive++;
  
      // If the next character is different than the current, append to the array
      if (i + 1 >= str.length || str[i] !== str[i + 1]) {
        compressedArray.push(str[i]); // Append the character
        compressedArray.push(countConsecutive); // Append the count
        countConsecutive = 0; // Reset the counter
      }
    }
  
    const compressedString = compressedArray.join(""); // Convert array to string
  
    // Return the original string if compressed string is not shorter
    return compressedString.length < str.length ? compressedString : str;
  }
  
  // Example usage:
//   console.log(stringCompression("aabcccccaaa")); // Outputs: "a2b1c5a3"
//   console.log(stringCompression("abcdef")); // Outputs: "abcdef"
//   console.log(stringCompression("")); // Outputs: ""
//   console.log(stringCompression("aa")); // Outputs: "aa"

function isRotation(s1, s2) {
    if (s1.length !== s2.length) return false;
    const combined = s1 + s1; // Concatenate s1 with itself
    return combined.includes(s2); // Check if s2 is a substring of the combined string
}

// Example usage:
// console.log(isRotation("waterbottle", "erbottlewat")); // Output: true
// console.log(isRotation("hello", "llohe")); // Output: true
// console.log(isRotation("hello", "world")); // Output: false

//Rotate In place

function rotateInPlace(str, n) {
    let arr = str.split('');
    n = n % arr.length; // Handle cases where n is greater than the string length
    reverse(arr, 0, arr.length - 1);
    reverse(arr, 0, n - 1);
    reverse(arr, n, arr.length - 1);
    return arr.join('');
}

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

// Example usage:
console.log(rotateInPlace("abcdef", 2)); // Output: "efabcd" also you can do it using rotaate reverse function