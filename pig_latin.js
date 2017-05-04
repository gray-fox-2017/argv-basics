'use strict'

function pigLatin(sentence) {
  let arr=sentence.split(' ');

  for(let i=0;i<arr.length;i++) {
    let word = arr[i]
    let firstCharacterIsVowel = /^[aiueo]/g.test(word)
    if(!firstCharacterIsVowel){
      let vowel = word.match(/[aiueo]\w+/g);
      let cons  = word.replace(vowel,'')
      if(vowel!==null) {
        word = vowel+cons+'ay';
      } else {
        word += 'ay';
      }
    }
    arr[i] = word;
  }
  return arr.join(' ');
}

// Your CLI code here

let cli = process.argv;

let input = [];
for(let i = 2; i < cli.length; i++) {
  input.push(cli[i]);
}

input = input.join(' ');

console.log(pigLatin(input))