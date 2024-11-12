//strictPropertyInitialization  
// tsc class1.ts --strictNullChecks --strictPropertyInitialization
class BadGreeter{
  name : string;
//fixing the BadGreeter
 constructor() {
     this.name = "no name";
}
}

const p = new BadGreeter();
const a = p.name = "John"
