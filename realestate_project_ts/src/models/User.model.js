export class User {
    name;
    lname;
    email;
    password;
    id;
    constructor(name, lname, email, password, id) {
        this.name = name;
        this.lname = lname;
        this.email = email;
        this.password = password;
        this.id = id;
    }
}
let user = new User("asdf", "asdf", "asdf", "asdf", 5);
function app() {
    var title = "Title!!";
    function printTitle() {
        console.log("title", title);
    }
    function calc() { }
    var a;
    var b, { return: a };
    ++ + b;
}
printTitle("hello world");
console.log(calc(5, "a"));
