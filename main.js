// Task No1

let fibonacci = parseInt(prompt('Enter a number (Fibonacci sequence):'));
let fibConst = [0, 1];
for (i = 2; i < fibonacci; i++) {
   fibConst[i] = fibConst[i - 1] + fibConst[i - 2];
};
console.log(fibConst.join(', '));

//Task No2

let numberladderRange = parseInt(prompt('Enter a number (number ladder range):'));
let ladderNumberEntry = [];
for (j = 1; j < numberladderRange + 1; j++) {
   ladderNumberEntry.push(j);
   console.log(ladderNumberEntry.join(' ')); 
};
