////////////////////////////////////////////////////////////////
// Conditionals:
///////////////////////////////////////////////////////////////

//1. Write a JavaScript display the larger of two integers
// const greaterNumber = (x,y) => {
//   if(x === y) {
//     return 'Equal';
//   } else if(x > y) {
//     return x;
//   } else {
//     return y;
//   }
// }
//console.log(greaterNumber(3,3));
/* 2. Write an if/else statement for the following requirements:

If student gets 90 or higher: console log  A
If students get 80 or above: console log B
If students get 70 or above: console log C
If students get 55 or above: console log D
Any grade lower than 55 is F */

// function autoGrader(grade) {
//   if(grade >= 55) {
//     if(grade < 70) {
//       console.log("D");
//     } else if(grade < 80) {
//       console.log("C");
//     } else if(grade < 90) {
//       console.log("B");
//     } else {
//       console.log("A");
//     }
//   } else {
//     console.log("F");
//   }
// }
// autoGrader(90);
// autoGrader(93);
// autoGrader(80);
// autoGrader(85);
// autoGrader(70);
// autoGrader(72);
// autoGrader(55);
// autoGrader(67);
// autoGrader(54);

//3. Write a JavaScript program that displays "Good Morning" if time is between 5AM-11:59 | "Good Afternoon" if time is between 12 - 16 | otherwise "Hey there"
// function greeting(time) {
//   if(time >= 5 && time < 12) {
//     console.log("Good Morning");
//   } else if(time >= 12 && time <= 16) {
//     console.log("Good Afternoon")
//   } else {
//     console.log("Hey there")
//   }
// }  //return to this to see how to parse :;

////////////////////////////////////////////////////////////////
// Strings:
///////////////////////////////////////////////////////////////
// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina
// let chatAtPractice = 'Sabrina';
// console.log(chatAtPractice.charAt(4));

// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy
// let unicode = "Teddy";
// console.log(unicode.charCodeAt(2));
//******** Answer below  ********/
/*  Unicode assigns a character a unique hexadecimal sequence that allows the computer to understand how to translate characters.
**  It allows you to mix difference characters in different languages in the same program. */

// Using fromCharCode() - make it readable for us :). You'll see!
// console.log(String.fromCharCode(22,345,100,121,83,54,333,5432));
// // Take your first and last name and concat()
//     let fname = 'Richard';
//     let lname = 'Harris';
//     console.log(fname.concat(' ',lname));
// // Create a string and make it return true using startsWith()
//     console.log(fname.startsWith('R'));
// // Now use any variable with endsWith() and return false
//     console.log(fname.endsWith('x'));
// Finish the following sentence. Use includes() and return true.
//     const ozgur = 'Once upon a time Ozgur looked up at the Moon, '
//     console.log(ozgur.includes('upon'));

// // Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
//     const joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."
//     console.log(joshHadALittleLambOopsCow.indexOf('cow'));
////////////////////////////////////////////////////////////////
// Boolean:
///////////////////////////////////////////////////////////////

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

// const a = 5;
// const b = 10;
// const c = 15;
// const d = "Keke"

// console.log(a < b)
// console.log(c > b)
// console.log(d === d)
// console.log(d !== a)
// console.log(a <= 15)
// console.log(a < b < c)
// console.log(c > b > a !== d)


////////////////////////////////////////////////////////////////
// Loops:
///////////////////////////////////////////////////////////////
// Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.
// for(let roomSpins = 0; roomSpins < 10; roomSpins++) {
//   console.log('a sentence');
// }

// Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.
// for(let teoVision = 0; teoVision < 20; teoVision++) {
//   console.log("*** Teo's vision spins ***");
// }

// But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.
// for (let teoVision = 0; teoVision < 20; teoVision++) {
//   console.log("I'm sorry");
// }
// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 

// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
// const whateverQueenBeySaid = {
//   thing1: 'shoes',
//   thing2: 'clothes',
//   thing3: 'gaming console'
// }

// for(let thing in whateverQueenBeySaid) {
//   console.log(`${thing}`); //You could also print the items to the right by whateverQueenBeySaid[thing];
// }

// // Using (FOR IN LOOP), print the indexes of the array.
// const lana = ['l', 'a', 'n', 'a']
//   for(let item in lana) {
//     console.log(item)
//   }

// // USE (FOR OF LOOP)!
// const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']
//   for(let element of tia) {
//     console.log(element);
//   }
//   // ***Mental note, for in loops over the key, or enumerable parts of a collection, while the for in loops over the values.***

// // Look into forEach() loop, it accepts a callback aka a function inside a function. 
// // Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 
// const perscholas = ['Amira', 'Arely', 'Jonathan']
// let stringConcatenator = (array) => {
//   let ps = '';
//   array.forEach(element => {
//     ps += `${element} `
//   });
//   console.log(ps);
// }
// stringConcatenator(perscholas);
////////////////////////////////////////////////////////////////
// Arrays:
///////////////////////////////////////////////////////////////

// Look up the following: Make a note of what each one of these methods do
// push()  inserts a value to the end of an array. i.e let array = [1,2,3] -> array.push(4) -> array = [1,2,3,4]
// pop()  removes the last element of an array. i.e let array = [1,2,3,4] -> array.pop() || let last = array.pop() -> array = [1,2,3] last = 4
// unshift() inserts a value to the beginning of an array. i.e let array = [2,3,4,5] -> array.unshift(1) -> array = [1,2,3,4,5]
// shift() removes the first element in an array i.e let array =[5,1,2,3,4] -> array.shift() || let first = array.shift() -> array = [1,2,3,4] -> first = 5;
// concat() combines two arrays i.e let arr1 = [1,2,3,4,5] let arr2 = [6,7,8,9,10] -> let arr3 = arr1.concat(arr2) -> arr3 = [1,2,3,4,5,6,7,8,9,10] **creates a new array, doesn't mutate existing arrays.
// splice() changes an array by either adding/removing/replacing elements syntax of splice(start index, items to delete, ...items to insert from start) i.e array = [1,2,4,5] -> array.splice(1,0,3) -> array = [1,2,3,4,5] 
// slice() returns a shallow copy(reference pointer) of an array into a new array. syntax is slice(start index(inclusive),end index(exclusive)) -> let arr1 = [1,2,3,4] -> let arr2 = arr1.slice(1,3) -> arr2 = [2,3]
// sort() returns a sorted element in place(not creating a new array) **Caution** the array will be sorted by its UTF-16 character sequence NOT numerically unless a compare function is passed, see example below.
//        let array = [1,10000,3,222,456,66,4332];
//        console.log(array.sort());
//        console.log(array.sort((a,b) => a - b));
// includes() Checks to see if an array contains a inputted value, returning a boolean value. i.e let array = [1,2,3,4,5] -> array.includes(2) -> true || array.includes(100) -> false.
// indexOf() returns the first index at which a given element can be found, returns -1 if not present. i.e let array = [1,2,3,4,5] -> array.indexOf(2) -> 1 || array.indexOf(100) -> -1
// length returns the length of an specified data type. i.e let array = [1,2,3,4,5] -> array.length -> 5 **doesn't start the count at 0 but rather 1..not index based.**

// /* You've been tasked to do this week's grocery shopping. As you arrive at Times Supermarket, Raphael pings you to get a bottle of Hendricks gin. Add this to the existing shoppingList and console.log it.*/
// var shoppingList = [

//   "cool ranch doritos",

//   "kings hawaiian sweet bread",

//   "peanut butter oreos",

//   "fruit loops cereal"

// ];

// ***done a few ways
// shoppingList.push('Hendricks gin');
// console.log(shoppingList)
// shoppingList.unshift('Hendricks gin');
// console.log(shoppingList);
// shoppingList.splice(shoppingList.length,0,'Hendricks gin');
// console.log(shoppingList);

//3.  Use the force, or in this case the reverse method to help Yoda make some sense with his motivational talk to the young Jedi interns.*/

// var yoda = ["try", "no", "is", "there", "not", "do", "or", "do"];
// yoda.reverse();
// console.log(yoda.join(' '));


//4. People been lining up for hours to get the newest iphone release. Help manage the unruly crowd of privileged customers by serving them one at a time and assiging it to a variable named `nowServing`. Console.log this new variable as well as the waitList.*/

  // var waitList = ["Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro"];
  // let nowServing = '';
  // while(waitList.length > 0) {
  //   nowServing = waitList.shift();
  //   console.log(`Now serving ${nowServing}, current waitlist: ${waitList} \n`);
  // }

//5. Help Nike sell more overpriced sneakers by changing their slogan from an array into a string. Convert the shoe array and assign it to a variable named `shoeString`. Console.log this new variable.

// var shoe = ["just", "do", "it"];
// let shoeString = shoe.join(' ');
// console.log(shoeString);

// ===== SPREAD OPERATOR =====

// Create a variable and assign a value of a copied array using the spread operator
// let array = [1,2,3,4,5,6,7];
// let newArray = [...array];
// console.log(array);
// console.log(newArray);

// // Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.
// let stringArray = ['Hello','my namne', 'is', 'Richard'];
// let stringArray2 = ['I','am','learning','about','arrays'];
// let concatArray = [...stringArray , ...stringArray2];
// console.log(concatArray);

////////////////////////////////////////////////////////////////
// Functions:
///////////////////////////////////////////////////////////////

// Don't forget to CALL your functions

//1. Write a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
// const maxOfTwoNumbers = (a ,b) => {
//   if(a > b) {
//     return a
//   } else if(b > a) {
//     return b
//   } else {
//     return 'Equal';
//   }
// }
// console.log(maxOfTwoNumbers(123e5,324e2));
// //2. Write a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// const maxOfThree = (a, b, c) => {
//   let array = [a,b,c];
//   array.sort((a,b) => a - b)
//   return array[array.length - 1];
// }
// console.log(maxOfThree(22234,3333333,444));

// //3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise
// const isCharacterAVowel = (character) => {
//   let vowel = /[aeiou]/gi;
//   if(character.match(vowel)) {
//     return true
//   }
//   return false;
// }
// console.log(isCharacterAVowel('a'));
// console.log(isCharacterAVowel('A'));
// console.log(isCharacterAVowel('k'));
// //4. Write a function charCount that takes a string and returns the length of the string.
// const charCount = (string) => string.length;
// console.log(charCount("I am beautiful, no matter what they say.")); // could use trim().length if we wanted to remove whitespace and inclue characters only

// //5. Write a function vowelCount that takes a String and returns the number of vowels in the String. Add a check for the string to be of 10 or less characters.
// const vowelCount = (string) => {
//   let vowels = /[aeiou]/ig;
//   return string.match(vowels).length;
  
// }
// console.log(vowelCount('aeiou'));
// console.log(vowelCount('I wish I was an elephant'));
