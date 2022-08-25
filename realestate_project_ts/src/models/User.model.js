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
