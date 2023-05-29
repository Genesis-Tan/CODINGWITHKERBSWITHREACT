function foo(y){
  y = 2;
}

let x = 3; 

console.log(x) 
function eat(food) {
  food.eaten = true;
}


  const apple = { eaten: false, type: 'fruit', fresh: true };
  const isAppleEaten = apple.eaten;
  eat(apple);
  const isAppleReallyEaten = apple.eaten;
  console.log(isAppleReallyEaten);

  var mathCube = (number) => {
    return number ** 3;

  }

  console.log(`The cube of 3 is ${mathCube(3)}`);


  function makeCounter() {
    var counter = 0;
    return {
      value: function () {
        return counter;
      },
      increment: function () {
        counter++;
      },
    };
  }
    var a = makeCounter();
var b = makeCounter();

a.increment();

console.log(a.value());
console.log(b.value());
