// animal has methods
let animal = {
  walk() {
    if (!this.isSleeping) {
      alert(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  }
};
animal.sleep();
//animal.walk();
alert(animal.isSleeping);

let object2 = {
  prop1: "hye hello",
  prop2: "code with me",
  printthis() {
    console.log(this);
//      console.log("print me");
}}

object2.printthis();
