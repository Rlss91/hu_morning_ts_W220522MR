/* ================ arrays ================ */

let namesArr: string[] = ["kenny", "john"];

let gradesArr: number[] = [100, 100, 100, 100];

let answersArr: boolean[] = [true, false, true, false];

let numberStringArr: (number | string)[] = [
  2121,
  "kenny",
  "wick",
  "marty",
  51543,
];

type cusType = string | number | boolean;
let cusArr: cusType[] = [123, true, "asdfsd"];

/* functions */

//this function will not get anything and will not return anything
//void = this function will not return anything
const helloWorldFunc: Function = (): void => {
  console.log("Hello world!");
};

// const f3 = () => console.log("");

// const f1 = () => 1 + 1;

// const f2 = () => {
//   return 1 + 1;
// };

//we declared that this function will not return anything
//but we return number!!!!
//this is error
// const voidFunc: Function = (): void => {
//   return 5;
// };

// const voidFunc2: Function = (): void => {
//   return;
//   let i = 5;
// };

//TK: create function that will get number, if this number smaller then 5, stop the function else display all good
// const tkFunc: Function = (age) => {
//   if (age < 5) {
//     return;
//   } else {
//     console.log("all good");
//   }
// };
// const tkFunc: Function = (age) => {
//   if (age < 5) {
//     return;
//   }
//   console.log("all good");
// };

//we declare that this function will return string
//this function must return a string
const rstringfunc: Function = (): string => {
  return "5";
};

//we declare that this function will return string or number
//this function must return a string or number
const rnumberstringfunc: Function = (): string | number | null => {
  return "true";
};

const calc: Function = (num1: number, num2: number, op: string): number => {
  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
  return NaN;
};

calc(1, 3, "@");
calc(5, 0, "/");

const defaultArgs: Function = (num1: number, num2: number = 5): void => {};

const optionalArgs: Function = (num1: number, num2?: number): void => {
  if (num2 !== undefined) {
  }
};

/* ================ interface ================ */
// let obj116: { name: string; lname: string };
// let obj216: { name: string; lname: string };
// let obj316: { name: string; lastname: string };
// let obj416: { name: string; lname: string };

interface IUser {
  name: string;
  lname: string;
  age: number;
}

let obj116: IUser = { name: "kenny", lname: "mc", age: 20 };

interface IOptinal {
  name: string;
  lname: string;
  age?: number;
}

let obj216: IOptinal = { name: "kenny", lname: "mc" };
let obj316: IOptinal = { name: "kenny", lname: "mc" };
obj316.age = 10;

interface IAddress {
  city: string;
  street: string;
  houseNumber: number;
  floor?: number;
  apartementNumber?: number;
  pob?: string;
  zip: number;
}

interface IUserWithAddress {
  name: string;
  lname: string;
  address: IAddress;
}

let obj416: IUserWithAddress = {
  name: "kenny",
  lname: "mc",
  address: {
    city: "Modi'in",
    street: "neot ashkeluna",
    houseNumber: 5,
    zip: 656565,
    pob: "sdf435tsdf",
  },
};

/* ================ class ================ */
class User {
  name: string;
  lname: string;
  id: number;
  constructor(name: string, lname: string) {
    this.name = name;
    this.lname = lname;
    this.id = this.genId();
  }
  genId(): number {
    return Math.random();
  }
}
let user16 = new User("kenny", "mc");
let user116: User;
//.....................................
user116 = new User("john", "wick");

class SuperUser {
  static staticVar: number;
  private id: number;
  public name: string;
  readonly createdAt: Date;
  constructor() {
    this.id = 0;
    this.name = "";
    this.createdAt = new Date();
  }
}

SuperUser.staticVar = 5;

let superuser = new SuperUser();
// let superuser = {
//   #id: 0,
//   name: "",
//   createdAt: new Date(),
// };
// superuser.id = 5;
superuser.name = "kenny";
console.log(superuser.name);
console.log(superuser.createdAt);
console.log(SuperUser.staticVar);
// console.log(superuser.id);

/* ================ enum ================ */
// "Success" != "success" != "succesS"

enum EDisplayMode {
  CARUSELA,
  LIST,
  GRID,
}

let eDisplayMode = EDisplayMode.CARUSELA; //html

if (eDisplayMode === EDisplayMode.CARUSELA) {
} else if (eDisplayMode === EDisplayMode.GRID) {
} else if (eDisplayMode === EDisplayMode.LIST) {
}

// if (eDisplayMode === 0) {
// } else if (eDisplayMode === 1) {
// } else if (eDisplayMode === 2) {
// }

enum EDisplayMode2 {
  CARUSELA = 1,
  LIST,
  GRID,
}

enum EServerStatus {
  SUCCESS,
  FAIL,
}

/* ================ generic ================ */

// let printAll = (varToPrint) => {
//   console.log(varToPrint);
// };
const printAll = <GenericType>(varToPrint: GenericType): void => {
  /*
    <GenericType> - let the dev that uses our function to choose type
    GenericType - you can give it any name you want!
  */
  console.log(varToPrint);
};

printAll<number>(2);
