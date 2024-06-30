// big O notation : 

const groceries = ['milk', 'eggs', 'flour', 'choose', 'sugar'];


const searchForItem = (item) => {
  for (let i = 0; i < groceries.length; i++) {
    if (groceries[i] === item) {
      console.log(`Found ${item} 1`)
    }
  }


  for (j = 0; j < groceries.length; j++) {
   if (groceries[j] === item) {
    console.log(`Found ${item} 2`)
   }
  }
  // There are 2 for loops are there : n + n  = O(2n) 
  // we dont call O(2n) we should remove 2. it should be ---->  O(n) 
  // Drop the constant so it becomes O(n)
}
searchForItem("eggs");



// lets get started : 
// what is O(1) ? :
const numbers = [1, 2, 3, 4, 5];

const getElement = (arr, index) => arr[index];

console.log(getElement(numbers, 0));


// lets get started :
// what is O(n^2) ? : 
function findPairs(arr) {
  // here this is --> O(n^2) :
  for (let i = 0; i < arr.length; i++) {
   for (let j = i + 1; j < arr.length; j++){
     console.log(`Pair: ${arr[i]}, ${arr[j]}`)
   }
  }

  // here only --> O(n) : 
for (q = 0; q < arr.length; q++) {
  console.log('-------', q)
}

// if we combine the "O" operations it becomes O(n^2 + n)
// O(n^2) is a Dominant term
// "n" is a Non-dominant term
// So we remove the "non-dominant" term and we're only left with O(n^2)
// This way, we simplify our bigO 
}
const numbers = [1, 2, 3, 4, 5];
findPairs(numbers);


// lest get started : 
// what is O(log n) : 

