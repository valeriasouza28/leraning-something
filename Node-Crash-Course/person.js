// cri objeto person
class Person {
  // cria construtor
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age}`)
  }
}

// p usar objeto  em  outro arquivo
module.exports = Person
