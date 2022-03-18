const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getFibonacci = (num) => {
  // Recursive fibonacci
  if (num < 2) return num;
  else {
    return getFibonacci(num - 1) + getFibonacci(num - 2);
  }
};

const generateCoincidences = (input) => {
  if (isNaN(input)) return 'You have placed an invalid input!';

  let length = input || 5;
  let randomArray = [],
    primeArray = [],
    fibArray = [];

  while (randomArray.length < length) {
    let randomNumber = Math.floor(Math.random() * 51); // Get random number from 1 to 50
    if (!randomArray.includes(randomNumber)) randomArray.push(randomNumber);
  }
  console.log('Random list =', randomArray);

  randomArray.forEach((number) => {
    let isPrime = true;
    for (var i = 2; i <= number - 1; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primeArray.push(number);
  });
  console.log('Prime list =', primeArray);

  const maxValue = Math.max(...primeArray);
  for (let i = 1; i <= maxValue; i++) {
    fibArray.push(getFibonacci(i));
  }
  return fibArray;
};

rl.question('How many random numbers do you want? ', (input) => {
  console.log('Output =', generateCoincidences(input));
  rl.close();
});
