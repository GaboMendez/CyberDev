const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const generateRandomList = (input) => {
  if (isNaN(input)) return 'You have placed an invalid input!';
  if (input > 20) return 'You have placed an input more than max value!';

  let length = input || 5;
  let array = [];

  while (array.length < length) {
    let randomNumber = Math.floor(Math.random() * 101);
    if (!array.includes(randomNumber)) array.push(randomNumber);
  }
  return array;
};

rl.question('How many random numbers do you want? ', (input) => {
  console.log('Output =', generateRandomList(input));
  rl.close();
});
