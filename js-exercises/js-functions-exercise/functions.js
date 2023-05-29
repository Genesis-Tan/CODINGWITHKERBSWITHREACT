// TODO: write a function called calculateAge that accepts two arguments
// birth year, and current year.
// It should calculate two possible ages: based on whether birth month has passed or not
// sample input: 2002, 2023; sample output: "You are either 20 or 21 years old"

function calculateAge(birthYear,currentYear){


    let approximateAge = currentYear - birthYear
    

    return "You are either " + (approximateAge-1)    + " or " + approximateAge + " years old";
}

// TODO: write a function called operator that accepts a number
// It should return a function that accepts another number, and a string which can be any of the following:
// addition, subtraction, multiplication, division.
// The returned function should return either the sum, difference, product, or quotient of the two numbers.
// The number in the second function always comes first in the operation.
//If the operation is not one of the listen ones, alert operation not supported or throw an error


function operator(num1) {

    return function(num2, operation) {

      switch (operation) {
        case 'addition':
          return num2 + num1;
        case 'subtraction':
          return num2 - num1;
        case 'multiplication':
          return num2 * num1;
        case 'division':
          return num2 / num1;
        default:
          throw new Error('Operation not supported');
      }
      
    };
  }