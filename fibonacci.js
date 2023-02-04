//first solution = recursive to find the n number of Fibonacci number
let fibo = (n) => {
        if (n === 0 || n === 1) { 
            return n
        } else {
            return fibo(n - 1) +
                fibo(n - 2);
        }
    }

console.log(fibo(8))

//second solution = recursive with memoization 
let fibo2 = (n, cache=[]) => {
  if (n === 0 || n ===1 ) {return n}
  if (n === cache[n]) {return cache[n]}
  cache[n] = fibo2(n - 2,cache)+fibo2(n - 1,cache);
  console.log(cache)
  return cache[n]
} 


console.log(fibo2(6))

//third solution = iterative algorithm
let fibo3 = (n) => {
  let fiboArray = [0,1]
for (let i = 2 ; i <= n ; i++) {
  fiboArray[i] = fiboArray[i-2] + fiboArray[i-1]
  console.log(fiboArray)
}
  return fiboArray[n]
} 

console.log(fibo3(1))



// This is a demo task.

// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].
// Copyright 2009–2023 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  //sort the array
  const set = new Set(A)
  let i = 1
  while (set.has(i)) {
   i++   
  }
  return i
}