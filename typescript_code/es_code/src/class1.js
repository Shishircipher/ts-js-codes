//strictPropertyInitialization  
// tsc class1.ts --strictNullChecks --strictPropertyInitialization
var BadGreeter = /** @class */ (function () {
    //fixing the BadGreeter
    function BadGreeter() {
        this.name = "no name";
    }
    return BadGreeter;
}());
var p = new BadGreeter();
var a = p.name = "John";
