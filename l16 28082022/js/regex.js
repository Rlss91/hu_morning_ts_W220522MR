let regex = new RegExp(`\\S+@\\S+\\.\\S+`);
/*
    when we use RegExp we will pass string and not /regex/ig.
    we need this for typescript.
    \\ mean \, because its string we must write \\ instend of \
*/
let str = "a@b.c";
let notEmail = "a.a.c";
console.log(str, regex.test(str));
console.log(notEmail, regex.test(notEmail));
/*
    test will get string parameter to check if it match the regex or not.
    if it match then true, else false
*/

const handleEmailInputChange = (event) => {
  let emailInput = event.target.value;
  //   if (regex.test(emailInput)) {
  //     event.target.style.backgroundColor = "green";
  //   } else {
  //     event.target.style.backgroundColor = "red";
  //   }
  event.target.style.backgroundColor = regex.test(emailInput) ? "green" : "red";
};
