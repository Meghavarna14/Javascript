// console.log("Hello");//semicolon is required when you are writing some code immediately after function call
// console.log(10>20>40?"true":"false");
console.log("...........................................");
function test() {
  console.log("First Function");
  function inner() {
    console.log("Inner Function");
  }
  return inner;
}
test()();//function currying