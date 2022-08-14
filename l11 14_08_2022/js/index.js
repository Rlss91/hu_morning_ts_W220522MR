const calc = (a, b, c) => {
  if (typeof a === "number" && typeof b === "number" && typeof c === "string") {
    switch (c) {
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
      default:
      case "+":
        return a + b;
    }
  } else {
    return NaN;
  }
};

calc("+", 5, 5);
calc(5, 5, "@");

let obj = {
  name: "kenny",
  lname: "mc",
};

const displayObj = (_obj) => {
  console.log(`your name is ${_obj.name}`);
  console.log(`your name is ${_obj.lastname}`);
};

displayObj(obj);

let aaaa = "aaaa";

const f1 = () => {
  console.log("aaaa");
  aaaa = 5;
};

const f2 = () => {
  aaaa += "aaaa";
};

f1();
f2();
console.log("aaaa", aaaa);
