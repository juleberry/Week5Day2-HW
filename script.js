// Sorry, they may be out of order :)

// --------------------
// -- ANAGRAMS (ONE) --
// --------------------

// Homework (due tomorrow)
// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
// Answer must pass all tests below and have an On time complexity achieved by using 1 or more frequency counter

function validAnagram(str1, str2){
  let freq = {}
  let freq2 = {}

  for (let i = 0; i < str1.length; i++) {
    if (freq[str1[i]]) {
      freq[str1[i]]++
    } else {
      freq[str1[i]] = 1
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (freq2[str2[i]]) {
      freq2[str2[i]]++
    } else {
      freq2[str2[i]] = 1
    }
  }
  const freqKeys = Object.keys(freq)
  for (let i = 0; i < freqKeys.length; i++){
    if (freq[freqKeys[i]] !== freq2[freqKeys[i]]) {
      return false
    }
  }
  return true
}
console.log('-- ANAGRAMS ONE --')
console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car")) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true

// --------------------
// -- ANAGRAMS (TWO) --
//---------------------

// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case

function anagrams(str1, str2) {
  // create freq counter(s)
  let frequency = {}
  let frequency2 = {}
  //convert args to strings
  let reducedStr1 = str1.toLowerCase().split('').sort().join('') 
  let reducedStr2 = str2.toLowerCase().split('').sort().join('')
  // ignore special chars
  let splitStr1 = reducedStr1.replace(/[^\w ]/g, '') 
  let splitStr2 = reducedStr2.replace(/[^\w ]/g, '')
  // iterate over str1 length
  for (let i = 0; i < splitStr1.length; i++) {
    if (frequency[splitStr1[i]]) {
      frequency[splitStr1[i]]++
    } else {
      frequency[splitStr1[i]] = 1
    }
  }
  // iterate over str2 length
  for (let i = 0; i < splitStr2.length; i++) {
    if (frequency2[splitStr2[i]]) {
      frequency2[splitStr2[i]]++
    } else {
      frequency2[splitStr2[i]] = 1
    }
  }

  const frequencyKeys = Object.keys(frequency)
  // compare if anagrams are actually anagrams
  for (let i = 0; i < frequencyKeys.length; i++){
    if (frequency[frequencyKeys[i]] !== frequency2[frequencyKeys[i]]) {
      return false
    }
  }
  return true
}

// --- Examples
console.log('-- ANAGRAMS TWO --')
console.log(anagrams('rail safety', 'fairy tales')) // True
console.log(anagrams('RAIL! SAFETY!', 'fairy tales')) // True
console.log(anagrams('Hi there', 'Bye there')) // False

// tested some other strings
// console.log(anagrams('team', 'meat')) // true
// console.log(anagrams('dream', 'cream')) // false
// console.log(anagrams('Dormitory', 'Dirty Room')) // true

// --------------------
// ---- CHAR COUNT ----
// --------------------
// - Write a function named charCount that accepts a single string argument and returns an object that represents the count of each character in the string.
// - The returned object should have keys that represent the character with its value set to the how many times the character appears in the string argument.
// - Upper and lower case characters should be counted separately.
// - Space characters should be counted too.
// Examples:
function charCount(strArg) {
  let freqCharCount = {}
  for (let i = 0; i < strArg.length; i++) {
    if (freqCharCount[strArg[i]]) {
      freqCharCount[strArg[i]]++
    } else {
      freqCharCount[strArg[i]] = 1
    }
  }
  return freqCharCount
}

console.log(charCount('hello')) //=> { h: 1, e: 1, l: 2, o: 1 }
console.log(charCount('Today is fantastic!')) //=> { T: 1, o: 1, d: 1, a: 3, y: 1, ' ': 2, i: 2, s: 2, f: 1, n: 1, t: 2, c: 1, '!': 1 }