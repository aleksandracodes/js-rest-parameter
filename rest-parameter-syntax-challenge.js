/*
You will assign an array to a variable which will contain a copy of the array mixedLetters and 6 other letters.
You will create an arrow function which should take two parameters. This function should combine all the argument 
passed in into a single array and sort them and reverse them and then return this array
You are free to choose an arrow function of your choice to do this.
*/

let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];

let moreMixedLetters = [...mixedLetters, 'h', 'k', 'g', 'j', 'i', 'l'];

console.log(moreMixedLetters);

// start
const updateSortReverse = (arr, ...letters) => {
    let allLetters = arr;
    for (let i of letters) {
        allLetters.push(i);
    }
    return allLetters.sort().reverse();
};

// other option: const updateSortReverse = (arr, ...letters) => [...arr, ...letters].sort().reverse();

let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o')
console.log(reverseSort);
console.log(mixedLetters);