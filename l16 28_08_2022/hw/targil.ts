// function _app(){
//     var title="Title!!";
//     function printTitle(){
//         console.log("title", title);
//     }
//     function calc(var a, var b){
//         return a +++ b;
//     }
//     printTitle("hello world");
//     console.log(calc(5, "a"))
// }

const app = (): void => {
  let title = "Title!!";
  const printTitle = (): void => {
    console.log("title", title);
  };
  const calc = (a: number, b: number): number => {
    return a + b;
  };
  printTitle();
  console.log(calc(5, 10));
};
