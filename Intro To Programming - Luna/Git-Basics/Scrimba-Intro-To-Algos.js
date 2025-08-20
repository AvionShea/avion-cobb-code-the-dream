/* Challenge - Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"

.split() .join()
*/
function panic(string) {
    return string.split(" ").join(" 😱 ").concat("!").toUpperCase();
};


// Test your function
console.log(panic("I'm almost out of coffee")); //"I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
console.log(panic("winter is coming")); //"WINTER 😱 IS 😱 COMING!"
console.log(panic("Hello")); //HELLO!

/* Challenge - Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/
function whisper(str) {
    if (str.endsWith("!")) {
        return "shh..." + str.slice(0, -1).toLowerCase();
    }
    return "shh..." + str.toLowerCase();
};
console.log(whisper("PLEASE STOP SHOUTING.")); //"shh...please stop shouting."
console.log(whisper("MA'AM, this is a Wendy's!")); //"shh...ma'am, this is a wendy's"

/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            newStr += str[i].toUpperCase();
        } else {
            newStr += str[i];
        }
    };
    return newStr;
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));

/* Challenge - toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/

function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
};

/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/

function toTitleCase(str) {
    return str.split(" ").map((word) => capitalizeWord(word)).join(" ");
};

// Test your functions
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));

/* Challenge - Totally Not Another FizzBuzz 

Scrimba CEO Per Borgen wants you to write a program to grant special bonuses to all his employees based on their employee ID numbers! 

Scrimba has 100 employees and their employee ID numbers range from 1 - 100. If the employee's ID number is: 

Divisible by 3 - Vacation! 
Divisible by 5 - $100,000 bonus! 
Divisible by both 3 and 5 - JACKPOT! 1 Million and a Yacht!
Not divisible by 3 or 5 - :(
    
Write a program to loop through all the ID numbers and print their prize. 
Your function's output should look something like this: 

1 - :(
2 - :(
3 - Vacation! 
4 - :(
5 - $100,000 bonus!

Hint: Remainder operator, modulo 
 */

function awardBonuses() {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log(`${i} - JACKPOT! 1 Million and a Yacht!`)
        } else if (i % 3 === 0) {
            console.log(`${i} - Vacation!`)
        } else if (i % 5 === 0) {
            console.log(`${i} - $100,000 bonus!`)
        } else {
            console.log(`${i} - :(`)
        }
    }
}

awardBonuses();