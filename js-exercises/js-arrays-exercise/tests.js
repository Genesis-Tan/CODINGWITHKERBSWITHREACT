"use strict";

// DO NOT TOUCH THIS FILE! This will be used to run tests
(function () {
  (function joinTest() {
    (function () {
      const expected = "seeyoul8r";
      const result = join(["see", "you", "l", 8, "r"]);
      console.assert(result === expected, `Expected: ${expected} | Actual: ${result}`);
    })();

    (function () {
      const result = join(["sk", 8, "r", "boi"]);
      const expected = "sk8rboi";
      console.assert(result === expected, `Expected: ${expected} | Actual: ${result}`);
    })();

    (function () {
      const result = join([null, "abc", "123"]);
      const expected = "abc123";
      console.assert(result === expected, `Expected: ${expected} | Actual: ${result}`);
    })();
  })();

  (function removeTest() {
    (function () {
      const expected = ['are', 'joining', 'us'];
      const result = remove(['are', 'you', 'joining', 'us'], 'you');
      console.assert(result.length === expected.length && expected.every((element, index) => element === result[index]), `Expected: ${expected} | Actual: ${result}`);
    })();

    (function () {
      const expected = [1, 2, '3'];
      const result = remove([1, 2, '3'], 3);
      console.assert(result.length === expected.length && expected.every((element, index) => element === result[index]), `Expected: ${expected} | Actual: ${result}`);
    })();

    (function () {
      const expected = ['apple', 'banana', 'oats'];
      const result = remove(['apple', 'banana', 'chips', 'oats'], 'chips');
      console.assert(result.length === expected.length && expected.every((element, index) => element === result[index]), `Expected: ${expected} | Actual: ${result}`);
    })();
  })();

  (function swapTest() {
    (function () {
      const expected = [2, 1, 4, 3, 5];
      const result = swapAdjacentElements([1, 2, 3, 4, 5]);
      console.assert(result.length === expected.length && expected.every((element, index) => element === result[index]), `Expected: ${expected} | Actual: ${result}`);
    })();

    (function () {
      const expected = ['first'];
      const result = swapAdjacentElements(['first']);
      console.assert(result.length === expected.length && expected.every((element, index) => element === result[index]), `Expected: ${expected} | Actual: ${result}`);
    })();

    (function () {
      const expected = ['ra', 'ce', 'ca', 'r'];
      const result = swapAdjacentElements(['ce', 'ra', 'r', 'ca']);
      console.assert(result.length === expected.length && expected.every((element, index) => element === result[index]), `Expected: ${expected} | Actual: ${result}`);
    })();
  })();
})();
