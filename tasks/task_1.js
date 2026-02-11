class Account {
  constructor({ login, email }) {
    this.email = email;
    this.login = login;
  }

  getInfo() {
    console.log(`email: ${this.email}, login: ${this.login}`);

    return `email: ${this.email}, login: ${this.login}`;
  }
}

console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com
