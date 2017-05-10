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
// console.log(`${process.argv[2]} ${process.argv[3]}`);
let hasil = [];
let argv = process.argv.slice(2)
for (var i = 0; i < argv.length; i++) {
  hasil.push(pigLatin(argv[i]));
  // console.log(agrv[i]);
}
// console.log(argv);

console.log(hasil.join(' '));