"use strict";
// type heroi = {
//   name: string;
//   vulgo: string;
// };
const bot = {
    id: 1,
    name: "megaman",
};
const bot2 = {
    id: 2,
    name: "sonyc",
    sayHello() {
        return `hello i'm ${this.name}`;
    }
};
console.log(bot);
console.log(bot2);
//Quando usar interface
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `hello i'm ${this.name}`;
    }
}
const p = new Pessoa(1, "superman");
console.log(p.sayHello());
