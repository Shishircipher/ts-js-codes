class User {
  constructor(name) {
     this.name = name;
}

 sayHi() {
   alert(this.name);
}
}

//Usage:

let user = new User("John");
console.log(user);
