const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Money {
  name;
  value;

  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
}

class ChangeDetail {
  detail;
  quantity;
  constructor(detail, quantity) {
    this.detail = detail;
    this.quantity = quantity;
  }
}

class Cashier {
  static currencies = [
    new Money('Billete de Dos Mil', 2000),
    new Money('Billete de Mil', 1000),
    new Money('Billete de Quinientos', 500),
    new Money('Billete de Doscientos', 200),
    new Money('Billete de Cien', 100),
    new Money('Billete de Cincuenta', 50),
    new Money('Moneda de Veinticinco', 25),
    new Money('Moneda de Diez', 10),
    new Money('Moneda de Cinco', 5),
    new Money('Moneda de Uno', 1),
  ];
  static getChange(amount) {
    let change = [];
    this.currencies.forEach((currency) => {
      if (currency.value < amount) {
        let c = Math.floor(amount / currency.value);
        change.push(
          new ChangeDetail(new Money(currency.name, currency.value), c)
        );
        amount -= c * currency.value;
      }
    });

    return change;
  }
}

rl.question("What's the amount you want to exchange at the ATM? ", (input) => {
  let change = Cashier.getChange(input);
  console.log('Output =', change);
  rl.close();
});
