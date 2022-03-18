const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const generatePrimeNumberList = (input) => {
  if (isNaN(input)) return 'You have placed an invalid input!';

  let length = input || 9;
  let array = [];

  let number = 2;
  while (array.length < length) {
    let isPrime = true;
    for (var i = 2; i <= number - 1; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }
    if (!array.includes(number) && isPrime) array.push(number);
    number++;
  }
  return array;
};

rl.question('How many numbers of prime values do you want? ', (input) => {
  console.log('Output =', generatePrimeNumberList(input));
  rl.close();
});
