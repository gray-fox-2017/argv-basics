'use strict'

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

// Your CLI code here

function pigLatin(sentence) {
  // Your pig latin implementation here...
  let vowelRegx = /^[a|i|u|e|o]/gi;
  let notVowelRegx = /[^aiueo]+/;
  let strArr = [];
  let finalWord = "";
  let lineArr = sentence.split(" ");
  for (let i = 0; i < lineArr.length; i++) {
    if (vowelRegx.test(lineArr[i])) {
      strArr.push(lineArr[i]);
      // console.log(str);
    } else if (notVowelRegx.test(lineArr[i])) {
      let firstWord = lineArr[i].replace(notVowelRegx, "");
      let backWord = lineArr[i].match(notVowelRegx)[0];
      let finalWord = firstWord + backWord + "ay";
      strArr.push(finalWord);
      // console.log(str);
    }
  }
  finalWord = strArr.join(" ");
  return finalWord;

}


let sentenceArr = []
let param = process.argv
for (let i = 2; i < param.length; i++) {
  sentenceArr.push(param[i]);
}
let kalimat = sentenceArr.join(" ");
console.log(pigLatin(kalimat));


// console.log(process.argv);
