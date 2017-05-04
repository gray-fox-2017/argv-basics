// 'use strict'
// 
// let pigLatin = (word) => {
//   let firstLetter = word.charAt(0);
//   if(isPowel(firstLetter)){
//     return word
//   }else{
//     return `${word.substr(1)}${firstLetter}ay`;
//   }
// }
// 
// let isPowel = (char) => {
//   return (/^[aeiou]$/i).test(char);
// }
// 
// let convert = (sentence) => {
//   let result = []
//   let words = sentence.trim().split(/\s+/g)
//   for (let i=0;i<words.length;i++) {
//     result[i] = pigLatin(words[i])
//   }
// 
//   return result.join(" ")
// }
"use strict"
function pigLatin(word){
  let vowel = /[aiueo]/i
  let vowelmatch = word.match(vowel)

  if (vowelmatch.index === 0){
      return word;
  }

  if (vowelmatch.index !== 0) {
    let firstvowel = vowelmatch.index;
    var pig = word.substr(firstvowel) + word.substr(0,firstvowel) + "ay";
  }



  return pig;
}

function pigLatin2(sentence) {
  let result = []
  let split = sentence.split(" ")
  for (let i = 0; i < split.length; i++){
    result.push(pigLatin(split[i]))
  }
  return result.join(" ")
}

var pigread = process.argv

var convert = ""
    for (let x = 2; x < pigread.length; x++){
      convert += pigLatin(pigread[x]) + " "}
console.log(convert)


