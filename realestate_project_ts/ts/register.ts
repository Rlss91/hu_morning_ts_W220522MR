import { User } from "./models/User.model.js";

window.addEventListener("load", () => {
  let registerBtn = document.getElementById("registerBtn");
  if (registerBtn) {
    registerBtn.addEventListener("click", () => {
      handleRegisterBtnClick();
    });
  }
});

const handleRegisterBtnClick = () => {
  //* the regex should be in different file
  let nameRegex = new RegExp(`^[A-Z][a-z ]{2,50}$`);
  /*
    ^ = check from start
    [A-Z] = first letter is big
    [a-z] = second letter is small
    {2,50} = the name should be between 2 to 50 letters
    $ = check to end
  */
  let lnameRegex = new RegExp(`[A-Za-z0-9 ]`);
  let emailRegex = new RegExp(`\\S+@\\S+\\.\\S+`);
  let passwordRegex = new RegExp(
    `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,20}$`
  );
  /*
    ^ = check from the begginning of the text/string
    (?=.*[a-z]) =  atleast 1 small letter
    (?=.*[A-Z]) = atleast 1 big letter
    (?=.*\\d) = atleast 1 digit
    (?=.*[@$!%*?&]) = atleast 1 special character
    [A-Za-z\\d@$!%*?&] = allaw small/big letters and/or digits and/or special characters
    $ = check to the end of the text/string
  */
  let name = document.getElementById("name") as HTMLInputElement;
  let lname = document.getElementById("lname") as HTMLInputElement;
  let email = document.getElementById("email") as HTMLInputElement;
  let password = document.getElementById("password") as HTMLInputElement;
  if (name && lname && email && password) {
    if (
      nameRegex.test(name.value) &&
      lnameRegex.test(lname.value) &&
      emailRegex.test(email.value) &&
      passwordRegex.test(password.value)
    ) {
      let user = new User(name.value, lname.value, email.value, password.value);
      let usersJson = localStorage.getItem("users");
      if (usersJson) {
        let usersArr = JSON.parse(usersJson);
        //looking for email in db
        let userItem = usersArr.find(
          (item: User): boolean => item.email === user.email
        );
        //if email was found in the db this mean that the email already exists
        //the user should pick another email or reset password
        if (userItem) {
          console.log("email already exists, please login");
        } else {
          usersArr = [...usersArr, user]; //add new user to users array
          localStorage.setItem("users", JSON.stringify(usersArr));
          /*
            convert users array to string using JSON.stringify
                and
            store it in localStorage as json string
          */
        }
      } else {
        //localStorage is empty this mean that we need to create new users array
        localStorage.setItem("users", JSON.stringify([user]));
        /*
        convert users array to string using JSON.stringify
            and
        store it in localStorage as json string
        */
      }
    }
  }
};
