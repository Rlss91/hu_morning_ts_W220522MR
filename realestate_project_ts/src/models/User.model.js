export class User {
    name;
    lname;
    email;
    password;
    id;
    constructor(name, lname, email, password) {
        this.name = name;
        this.lname = lname;
        this.email = email;
        this.password = password;
        this.id = this.generateId();
    }
    generateId() {
        return Date.now() + this.getRandomInt(1, 1000000);
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
}
