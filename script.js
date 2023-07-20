"use strict";

// SET 1:


/*  1). Write a function isPalindrome(str) that takes a string as input and returns true if the string is a palindrome (reads the same forwards and backwards), and false otherwise. */

function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

console.log(isPalindrome("level"));   // Output: true
console.log(isPalindrome("hello"));   // Output: false
console.log(isPalindrome("A man, a plan, a canal, Panama!")); // Output: true


/*  2). Write a function isPrime(num) that takes a number as input and returns true if the number is prime (only divisible by 1 and itself), and false otherwise. */

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i * i <= num; i++){
    if (num % i === 0 ){
      return false;
    }
  }
  
  return true;
}
console.log(isPrime(2));   // Output: true
console.log(isPrime(17));  // Output: true
console.log(isPrime(27));  // Output: false


/*  3). Write a function getFibonacci(n) that takes a number n as input and returns an array containing the first n Fibonacci numbers. */

function getFibonacci(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    const fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci;
  }
}
console.log(getFibonacci(0)); // Output: []
console.log(getFibonacci(1)); // Output: [0]
console.log(getFibonacci(5)); // Output: [0, 1, 1, 2, 3]
console.log(getFibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]



/*  4). Write a function factorial(n) that takes a number n as input and returns the factorial of n. */

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Test cases
console.log(factorial(0)); // Output: 1
console.log(factorial(1)); // Output: 1
console.log(factorial(5)); // Output: 120 (5 * 4 * 3 * 2 * 1)
console.log(factorial(10)); // Output: 3628800 (10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1)



/*  5). Write a function getDuplicates(arr) that takes an array as input and returns an array containing the duplicate elements. */

function getDuplicates(arr) {
  const duplicates = [];
  const seen = {};

  for (const element of arr) {
    if (seen[element]) {
      if (!duplicates.includes(element)) {
        duplicates.push(element);
      }
    } else {
      seen[element] = true;
    }
  }

  return duplicates;
}

console.log(getDuplicates([1, 2, 3, 4, 5])); // Output: []
console.log(getDuplicates([1, 2, 3, 2, 4, 5, 4])); // Output: [2, 4]
console.log(getDuplicates(['apple', 'banana', 'orange', 'banana'])); // Output: ['banana']

/*  6). Write a function capitalizeFirstLast(str) that takes a string as input and capitalizes the first and last letter of each word. */

function capitalizeFirstLast(str) {
  return str.replace(/\b(\w)(\w*?)(\w)\b/g, (match, first, middle, last) => {
    return first.toUpperCase() + middle + last.toUpperCase();
  });
}

const inputString = "hello world, how are you?";
console.log(capitalizeFirstLast(inputString));
// Output: "HellO WorlD, HoW ArE YoU?"


/*  7). Write a function binarySearch(arr, target) that takes a sorted array and a target value as input and returns the index of the target value in the array, or -1 if the target value is not found. */

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; 
    } else if (arr[mid] < target) {
      left = mid + 1; // Target is in the right half of the array
    } else {
      right = mid - 1; // Target is in the left half of the array
    }
  }

  return -1; 
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const targetValue = 9;
console.log(binarySearch(sortedArray, targetValue)); // Output: 4 (index of 9 in the array)



/*  8). Write a function throttle(fn, limit) that takes a function fn and a limit in milliseconds as input and returns a throttled version of the function that will only execute once within the specified time limit, ignoring subsequent function invocations. */



/*  9). Write a function shuffleArray(arr) that takes an array as input and returns a shuffled version of the array. */

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
  return arr;
}

// Test case
const originalArray = [1, 2, 3, 4, 5];
const shuffledArray = shuffleArray(originalArray);
console.log(shuffledArray); // shuffled 



/*  10). Write a function deepClone(obj) that takes an object as input and returns a deep clone (a completely independent copy) of the object. */


