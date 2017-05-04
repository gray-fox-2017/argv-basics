'use strict'

let pigLatin = (word) => {
  let firstLetter = word.charAt(0);
  if(isPowel(firstLetter)){
    return word
  }else{
    return `${word.substr(1)}${firstLetter}ay`;
  }
}

let isPowel = (char) => {
  return (/^[aeiou]$/i).test(char);
}

let convert = (sentence) => {
  let result = []
  let words = sentence.trim().split(/\s+/g)
  for (let i=0;i<words.length;i++) {
    result[i] = pigLatin(words[i])
  }

  return result.join(" ")
}

// Your CLI code here
let input = process.argv
// console.log(convert(input.slice(2).join(' ')));
let words = ' ';
input.forEach((value, index) => {
  if(index >= 2) {
    words += value + " "
  }
});
console.log(convert(words));


//node pig_latin.js ayam bakar
