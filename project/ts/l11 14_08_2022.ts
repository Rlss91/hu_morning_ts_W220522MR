console.log("hello world!");

let x: number; //-♾️ to ♾️, -♾️.♾️ to ♾️.♾️
x = 5; //v
// x = true; //x

let theBestOs: string = "linux";

let doYouLikeApple: boolean = false;

let anyType: any; //tell ts to skip type check

let stringOrBoolean: string | boolean; //union type

type son = string | number;

let stringOrNumber: son = 5;
stringOrNumber = "asdf";

let obj: object = { name: "kenny", lname: "mc" };
// let obj = { name: "kenny", lname: "mc" };

// obj.name = 5; //x
// obj.age = 10; //x

let user: { name: string; lname: string; age: number };
user = {
  name: "john",
  lname: "wick",
  age: 43,
};

// user = {
//   name: "marty",
//   lastname: "mcfly", //x
//   age: 20,
// };
