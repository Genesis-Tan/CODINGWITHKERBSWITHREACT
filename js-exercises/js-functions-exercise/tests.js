"use strict";

// DO NOT TOUCH THIS FILE! This will be used to run tests
(function () {
  (function calculateAgeTest() {
    (function () {
      const expected = "You are either 20 or 21 years old";
      const result = calculateAge(2002, 2023);
      console.assert(result === expected, `Expected: ${expected} | Actual: ${result}`);
    })();

    (function () {
      const expected = "You are either 37 or 38 years old";
      const result = calculateAge(1985, 2023);
      console.assert(result === expected, `Expected: ${expected} | Actual: ${result}`);
    })();
  })();

  (function operatorTest() {
    (function () {
      const operator5 = operator(5);
      const result = operator5(10, 'addition');
      const expected = 15;
      console.assert(result === expected, `Expected: ${expected} | Actual: ${result}`);
    })();

    (function () {
      const operator3 = operator(3);
      const result = operator3(0, 'subtraction');
      const expected = -3;
      console.assert(result === expected, `Expected: ${expected} | Actual: ${result}`);
    })();

    (function () {
      const operator7 = operator(7);
      const result = operator7(6, 'multiplication');
      const expected = 42;
      console.assert(result === expected, `Expected: ${expected} | Actual: ${result}`);
    })();

    (function () {
      const operator4 = operator(4);
      const result = operator4(24, 'division');
      const expected = 6;
      console.assert(result === expected, `Expected: ${expected} | Actual: ${result}`);
    })();
  })();
})();
