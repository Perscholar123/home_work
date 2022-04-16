

/* 
1. Define a function  maxOfTwoNumbers  that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

 
const maxOfTwoNumbers= () => {
  let num;
   let num1 =prompt("Enter number1:", num);
   let num2 =prompt("Enter number2:", num);
  if(num1>num2)
  console.log(num1 + " is greater than " + num2);
  else if(num2>num1)
  console.log(num2 + " is greater than " + num1);
  else console.log(num1 + " is equal to " + num2);
  document.getElementById("demo").innerHTML = num;
};


 /*
 2. Define a function  maxOfThree  that takes three numbers as arguments and returns the largest of them.
 */
/*---------------
const maxOfThree = () => {
  let num;
   let num1 =prompt("Enter number1:", num);
   let num2 =prompt("Enter number2:", num);
   let num3 =prompt("Enter number3:", num);
   if(num1>num2 && num1>num3)
  console.log(num1 + " is greater than " + num2 + "and "+ num3);
  else if(num2>num1 && num2>num1)
  console.log(num2 + " is greater than " + num1 + "and "+ num3);
  else if(num3>num1 && num3>num2)
  console.log(num3 + " is greater than " + num1 + "and "+ num2);
 else(num1==num2 && num1==num3)
  console.log(num1 + " is greater than " + num2 + "and "+ num3);
  //else console.log(num1 + " is equal to " + num2);
  document.getElementById("demo").innerHTML = num;
};*/

const maxOfThree = () => {
  let num;
   let num1 =prompt("Enter number1:", num);
   let num2 =prompt("Enter number2:", num);
   let num3 =prompt("Enter number3:", num);
   if(num1 >= num2 && num1 >= num3)
      largest= num1;
   else if(num2>=num1 && num2 >= num3)
      largest=num2;
   else largest=num3; 
  console.log(`Largest of ${num1} , ${num2}, ${num3} is: ${largest}`); 
  document.getElementById("demo").innerHTML = num;
};

/*
 3. Write a function  isCharacterAVowel  that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
//  */


function isCharacterAVowel(x) {  return /[aeiouAEIOU]/.test(x); }

var input = '';
while (input.length != 1) {
  input = prompt("Enter a character ");
}
alert(isCharacterAVowel(input));





/*
 4. Define a function  sumArray  and a function  multiplyArray  that sums and multiplies (respectively) 
 all the numbers in an array of numbers. For example,  sumArray([1,2,3,4])  should return 10, and  multiplyArray([1,2,3,4]) 
  should return 24.
*/

function sumArray(numbers) {
	var total = 0;
	for (var i = 0; i < numbers.length; i++) {
		total += numbers[i];
	}
	return total;
}
console.log(sumArray([1,2,3,4])); // Print out the total to the console

// Set multiplication
function multiplyArray(numbers) {
	var total = 1;
	for (var i = 0; i < numbers.length; i++) {
		total = (total * numbers[i]);
	}
	return total;
}
console.log(multiplyArray([1,2,3,4]));  // Print out the total to the console


/* 5.Write a function that returns the number of arguments passed to the function
 when called.*/

 function printNames(...names) {
  console.log(`number of arguments: ${names.length}`);
  for (var name of names) {
    console.log(name);
  }
}

printNames('foo', 'bar', 'baz');



/* 6. Define a function  reverseString  that computes the reversal of a string. 
For example, reverseString("jag testar") should return the string "ratset gaj".
 */

//reverseString = () => { };

function reverseString(str) {
  let string = str.split('');

  for (i = 0; i < string.length; i++) {
    // debugger;
    string.splice(i, 0, string.pop());

  }
  console.log(string.join());
}
  reverseString('hello world')

 /*
 7. Write a function  findLongestWord  that takes an array of words and returns 
the length of the longest one. */

// findLongestWord = () => {
//   // ADD YOUR CODE HERE
// };

// function findLongestWord(str) {
//   return str.length;
// }
// console.log(findLongestWord("The"));

function longestString() {
  var longest = '';
    for (var i=0; i < arguments.length; i++) {
        if (arguments[i].length > longest.length) {
      longest = arguments[i];
    }
  }
  return longest;
  }
 console.log(longestString('hello world welcome'));








 /*
 8. Write a function  filterLongWords  that takes an array of words 
 and a number  i  and returns the array of words that are 
 longer than i characters long.
 */
// filterLongWords = () => {
//   // ADD YOUR CODE HERE
// };

var charFreq = function(string){
  var list = {};
  var length = string.length;
  for (var i = 0; i < length; i++) {  
  if (string.charAt(i) in list) 
    list[string.charAt(i)] += +1;
  else 
    list[string.charAt(i)] = 1;
  }
  return list;
}
console.log(charFreq('i like javascript'));

