// sample input: ['see', 'you', 'l', 8, 'r']; sample output: 'seeyoul8r'
function join(array) {
  // TODO: write code below this comment that will join elements of an array into a string


  return array.join("");
}

// sample input: ['are', 'you', 'joining', 'us'], 'you'; sample output: ['are', 'joining', 'us']
function remove(array, toRemove) {
  // TODO: write code below this comment that will return an array with the specified value (toRemove) removed
  // if the array does not contain the specified value, just return the array
  
  if(toRemove == null){
    return array;
  }
  
  array = array.filter(item => item !== toRemove)

  return array;

}

// sample input: [1, 2, 3, 4, 5]; sample output: [2, 1, 4, 3, 5]
function swapAdjacentElements(array) {
  // TODO: write code below this comment that will return an array with adjacent elements swapped
  const copy = array.slice(0); // creates a copy of the array. use this

  for (var i = 0; i < copy.length-1; i+=2) {
    var temp = copy[i+1];
    copy[i+1] = copy[i];
    copy[i]=temp;
}
  return copy;
}
