const handleLoginBtnClick = () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let loginContainer = document.getElementById("loginContainer");
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
  if (emailRegex.test(email) && passwordRegex.test(password)) {
    console.log("you logggged in");
    loginContainer.classList.remove("login-container-red");
    loginContainer.classList.add("login-container-green");
  } else {
    console.log("email or password invalid");
    loginContainer.classList.remove("login-container-green");
    loginContainer.classList.add("login-container-red");
  }
};
