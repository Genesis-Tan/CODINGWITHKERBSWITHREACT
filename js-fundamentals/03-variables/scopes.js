function sample() {
  const x = "declared inside function";
  console.log("inside function");
  console.log(x);
}

// try uncommenting the code below and see what happens
// console.log(x);

// valid
const y = "declared outside function";
sample2();
function sample2() {
  console.log("inside function");
  console.log(y);
}
console.log("outside function");
console.log(y);
