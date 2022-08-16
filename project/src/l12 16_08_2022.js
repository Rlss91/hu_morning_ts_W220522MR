"use strict";
let namesArr = ["kenny", "john"];
let gradesArr = [100, 100, 100, 100];
let answersArr = [true, false, true, false];
let numberStringArr = [
    2121,
    "kenny",
    "wick",
    "marty",
    51543,
];
let cusArr = [123, true, "asdfsd"];
const helloWorldFunc = () => {
    console.log("Hello world!");
};
const rstringfunc = () => {
    return "5";
};
const rnumberstringfunc = () => {
    return "true";
};
const calc = (num1, num2, op) => {
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
const defaultArgs = (num1, num2 = 5) => { };
const optionalArgs = (num1, num2) => {
    if (num2 !== undefined) {
    }
};
let obj116 = { name: "kenny", lname: "mc", age: 20 };
let obj216 = { name: "kenny", lname: "mc" };
let obj316 = { name: "kenny", lname: "mc" };
obj316.age = 10;
let obj416 = {
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
class User {
    constructor(name, lname) {
        this.name = name;
        this.lname = lname;
        this.id = this.genId();
    }
    genId() {
        return Math.random();
    }
}
let user16 = new User("kenny", "mc");
let user116;
user116 = new User("john", "wick");
class SuperUser {
    constructor() {
        this.id = 0;
        this.name = "";
        this.createdAt = new Date();
    }
}
SuperUser.staticVar = 5;
let superuser = new SuperUser();
superuser.name = "kenny";
console.log(superuser.name);
console.log(superuser.createdAt);
console.log(SuperUser.staticVar);
var EDisplayMode;
(function (EDisplayMode) {
    EDisplayMode[EDisplayMode["CARUSELA"] = 0] = "CARUSELA";
    EDisplayMode[EDisplayMode["LIST"] = 1] = "LIST";
    EDisplayMode[EDisplayMode["GRID"] = 2] = "GRID";
})(EDisplayMode || (EDisplayMode = {}));
let eDisplayMode = EDisplayMode.CARUSELA;
if (eDisplayMode === EDisplayMode.CARUSELA) {
}
else if (eDisplayMode === EDisplayMode.GRID) {
}
else if (eDisplayMode === EDisplayMode.LIST) {
}
var EDisplayMode2;
(function (EDisplayMode2) {
    EDisplayMode2[EDisplayMode2["CARUSELA"] = 1] = "CARUSELA";
    EDisplayMode2[EDisplayMode2["LIST"] = 2] = "LIST";
    EDisplayMode2[EDisplayMode2["GRID"] = 3] = "GRID";
})(EDisplayMode2 || (EDisplayMode2 = {}));
var EServerStatus;
(function (EServerStatus) {
    EServerStatus[EServerStatus["SUCCESS"] = 0] = "SUCCESS";
    EServerStatus[EServerStatus["FAIL"] = 1] = "FAIL";
})(EServerStatus || (EServerStatus = {}));
const printAll = (varToPrint) => {
    console.log(varToPrint);
};
printAll(2);
