(function() {
  let hello = "Our last line, " + "of defense";
  let name = "is your swordsman";
  
  let greeting = "Welcome to my blog," + " " + name;

  const someString = "abcdefg";
  console.log(someString.length);
  // try logging the length of `someString`

  var s = "Secret Stone";

  s.charAt(3);
  s.substring(1,5);
  s.indexOf("l",3);
  let x =s.split(", ");

  x.reverse();
  console.log(x);
  console.log(s.slice(1,4));
 console.log(s.replace("e", "t"));
console.log(s.toUpperCase());

  // try string the following string operations with s
  /*
    charAt
    substring
    slice
    indexOf
    lastIndexOf
    split
    replace
    toUpperCase
  */

    s[0] = 'Y'
    console.log(s);
})();
