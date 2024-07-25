/*JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
JavaScript arrays are not associative arrays and so, 
array elements cannot be accessed using arbitrary strings as indexes, 
but must be accessed using nonnegative integers (or their respective string form) as indexes.
JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, 
and so on — and the last element is at the value of the array's length property minus 1.
JavaScript array-copy operations create shallow copies. 
(All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies). */
// const fruits = [];
// fruits.push("banana", "apple", "peach");
// console.log(fruits.length); // 3

const fruits = [];// this is an empty array.fruits datatype is const. 
fruits.push("banana", "apple", "peach","chili"); // pusing all valuse in the array 
console.log(fruits.length); // 3 getting length of the array . ans is 3 coz there are 3 values. 


// Several of the built-in array methods (e.g., join(), slice(), indexOf(), etc.) 
//take into account the value of an array's length property when they're called.
// Other methods (e.g., push(), splice(), etc.) also result in updates to an array's length property.
/*When setting a property on a JavaScript array when the property is a valid array index and that index is outside 
the current bounds of the array, the engine will update the array's length property accordingly: */


fruits[5] = "mango"; // assinging the mango to the 5 element or key or value
console.log(fruits[5]); // 'mango'
fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6
console.log(fruits[4]); // undefined