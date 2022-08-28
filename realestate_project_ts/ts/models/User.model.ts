export class User {
  name: string;
  lname: string;
  email: string;
  password: string;
  private id: number;
  constructor(name: string, lname: string, email: string, password: string) {
    this.name = name;
    this.lname = lname;
    this.email = email;
    this.password = password;
    this.id = this.generateId();
  }
  generateId(): number {
    return Date.now() + this.getRandomInt(1, 1000000);
  }
  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
}

// let user = new User("asdf", "asdf", "asdf", "asdf", 5);
