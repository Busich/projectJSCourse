let str = "some";
str_obj = new String(str);
console.log(typeof str_obj);

console.dir([1, 2, 3, 4]);

const john1 = Object.create(soldier);

const soldier = {
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log("Pon");
  },
};
const john = {
  health: 100,
};

Object.setPrototypeOf(john, soldier);

console.log(john.armor);
john.sayHello();
