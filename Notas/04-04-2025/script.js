console.log("JAVASCRIPT CONECTADO");

// CRIAÇÃO DE CLASSE PELO JS:

// EXEMPLO 1
// Nota: parece uma função.
class vehicle {
  constructor(mark, model) {
    // "constructor" é um método especial JS
    this.mark = mark;
    this.model = model;
    // "this" aponta para ele mesmo = se refere ao próprio objeto criado
  }
}

// OBJETO (É UMA INSTANCIA DA CLASSE):
// Nota: "firstCar" é o objeto.
const firstCar = new vehicle("Toyota", "Corolla");
// "new" é usado para criar um objeto
console.log(firstCar.mark);

// ----------------------------------------------------------------------

// EXEMPLO 2
/* 
  Nota: para criar uma classe pelo JS é preciso de:
   *class
   *constructor
   * this
  um chama o outro.
*/
class Produto {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const phone = new Produto("Phone", 1500);
const notebook = new Produto("Notebook", 5000);

console.log(`${phone.name} ${phone.price}`);
console.log(notebook.name);

// ----------------------------------------------------------------------

// EXEMPLO 3
class bankAccount {
  constructor(openingBalance) {
    this.saldo = openingBalance;
  }

  depositar(valor) {
    // this.saldo = this.saldo + valor
    this.saldo += valor;
  }

  getSaldo() {
    return `Your balance is: R$${this.saldo.toFixed(2)}`;
  }
}
const account = new bankAccount(1000);
console.log(account.getSaldo());
account.depositar(1000);
console.log(account.getSaldo());

// ----------------------------------------------------------------------

// EXEMPLO 4
class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  /* 
    métodos são funções dentro de uma classe que tem como objetivo 
    executar ações ou manipular os atributos.
 */
  apresentation() {
    return `Hello, my name is ${this.name}! I have ${this.age} years old.`;
  }
}

const myApresentation = new person("Sarah", 16);
console.log(myApresentation.apresentation());

// ----------------------------------------------------------------------

// EXEMPLO 5
class Steam {
  #balance;
  // # para criar algo privado que só a classe terá acesso

  constructor(openingBalanceSteam) {
    this.#balance = openingBalanceSteam;
  }

  depositAmountSteam(value) {
    if (value > 0) {
      this.#balance += value;
    } else {
      console.log("Invalid deposit!");
    }
  }

  getBalanceSteam() {
    return `Your balance of steam is ${this.#balance}`;
  }
}

const steam = new Steam(1000);
account.depositar(300);
console.log(steam.getBalanceSteam());

// ----------------------------------------------------------------------

// EXEMPLO 6
class User {
  constructor(password) {
    // this.password = "123456789"
    this.password = password;
  }

  /*
  método "checkPasswordStrength" encapsulado (ele está privado),
  apenas os atributos dentro desta classe tem acesso a ele.
*/
  #checkPasswordStrength(password) {
    return password.length > 6 ? true : false;
  }

  criateAccount() {
    if (this.#checkPasswordStrength(this.password)) {
      return console.log("Account created!");
    }

    return console.log("Invalid password");
  }
}

const user = new User("123456789");
user.criateAccount();

// ----------------------------------------------------------------------

// EXEMPLO 7
// exemplo 2
/* Nota: "extends" é uma palavra-chave utilizada em JS para criar uma 
classe filha que herda uma classe pai, nesse caso "car" (filha) herda 
"vehicle" (pai).
*/
class car extends vehicle {
  constructor(mark, model, doors) {
    super(mark, model);
    this.doors = doors;
  }

  info() {
    console.log(
      `Car mark is: ${this.mark}, your model is: ${this.model} and he have ${this.doors} doors.`
    );
  }
}

const myCar = new car("Honda", "Civic", 4);
myCar.info();

// ----------------------------------------------------------------------

// EXEMPLO 8
// Nota: herdar não só os atributos, mas tudo o que não está privado
class worker {
  constructor(name, cash) {
    this.name = name;
    this.cash = cash;
  }

  showStatistics() {
    console.log(`Worker: ${this.name}, cash: R$${this.cash.toFixed(2)}`);
  }
}

class manager extends worker {
  constructor(name, cash, type) {
    super(name, cash);
    this.type = type;
  }

  showSector() {
    console.log(`${this.name} is manager of sector ${this.type}`);
  }
}

const Manager = new manager("Fernando", 5000, "TI");
Manager.showStatistics();
Manager.showSector();
