console.log("hello world");

let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

console.log(rabbit.eats);
console.log(rabbit.jumps);

rabbit.__proto__ = animal

console.log(rabbit.jumps); 
