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
console.log(anagrams('rail safety', 'fairy tales')) // True
console.log(anagrams('RAIL! SAFETY!', 'fairy tales')) // True
console.log(anagrams('Hi there', 'Bye there')) // False

// testing some other strings
console.log('\n-- Other Strings to Test --')
console.log(anagrams('team', 'meat')) // true
console.log(anagrams('dream', 'cream')) // false
console.log(anagrams('Dormitory', 'Dirty Room')) // true
