const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
function shortWord(danishWords) 
{
    let shortest = danishWords[0];
    for(let i=0; i<danishWords.length; i++)
    {   
        if(typeof(shortest=="string") && danishWords[i].length < shortest.length)
        {
           shortest = danishWords[i];
        }
    }
    return shortest;
}
console.log(shortWord(danishWords));
////////////////////////////////////


function danishLetters(danishString , letters) 
{
let letter_Count = 0;
let total=0;
let danishLettersRegEx = new RegExp(/([ÅÆØåæø])/g);
let danishLettersFound = danishString.match(danishLettersRegEx);
let count = (danishString.match(danishLettersRegEx) || []).length;
  total = `total : ${count}`;
  console.log(total);
 for (var i = 0; i < danishString.length; i++) 
 {
    if (danishString.charAt(i).includes(letters)) 
      {
      letter_Count += 1;
      }
      for (let i in letter_Count){
         return letter_Count[danishString[i]];
      }
  }
  
  return    `${letters}:${letter_Count}`;
}

console.log(danishLetters('Jeg har en blå bil' ,'å'));
console.log(danishLetters('Blå grød med røde bær' ,'å'));
console.log(danishLetters('Blå grød med røde bær' ,('ø')));
console.log(danishLetters('Blå grød med røde bær' ,('æ')));
