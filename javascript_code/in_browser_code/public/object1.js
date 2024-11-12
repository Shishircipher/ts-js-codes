console.log("hello world")

let user = {
 name: "John",
 age: 30,
 "like birds": true // multiword property name must be quoted
};

// this would give a syntax error
//user.likes birds = true

// get
//alert(user["likes birds"]); // true

console.log(user["likes birds"]);
// types conversion A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
//Other values become true, so they are called “truthy”.
//Value	Becomes…
//undefined	NaN
//null	0
//true and false	1 and 0
//string	Whitespaces (includes spaces, tabs \t, newlines \n etc.) from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.
//if (5) { 
if (user["like birds"] == true) { //why this is not working  in json boolean values ? - typo error
  console.log("yes it is true")
}

//In short, there are no limitations on property names. They can be any strings or symbols (a special type for identifiers, to be covered later).

//Other types are automatically converted to strings.

//For instance, a number 0 becomes a string "0" when used as a property key:

let obj = {
  0: "test" // same as "0": "test"
};

// both alerts access the same property (the number 0 is converted to string "0")
alert( obj["0"] ); // test
alert( obj[0] ); // test (same property)
