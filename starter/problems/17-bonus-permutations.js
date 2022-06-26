/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/
const factorial = n => (n < 1) ? 1 : n * factorial(n-1);

const moveElementToRight = (arr, idx) => {
	let newArr = arr.slice();													//copy the input array
	let elArr = newArr.splice(idx, 1);											//remove the desired element and save it
	if(idx === arr.length - 1) newArr.splice(0, 0, elArr[0]);					//put it back, one space to the right, if it's already at the end, wrap it around
	else newArr.splice(idx + 1, 0, elArr[0]);
	return newArr;
}

let permutations = (array, perms = []) => {

	if (counter === 0) return perms;

	let set = [];
	let rem = factorial(array.length - 1);										// number of possble combinations with each element as leading space
	let subset = array.slice(1);												// subset of the remaining elements separated from the first one
	for(let i = 0; i < factorial(array.length - 1); i++){ 						// for all the combinations of remaining indexes...
		set.push(array[0]);														// push the first element of the array


	}



}
let arr = [1,2,3,4];
console.log(arr = moveElementToRight(arr, 3));
console.log(arr = moveElementToRight(arr, 3));
console.log(arr = moveElementToRight(arr, 3));
console.log(arr = moveElementToRight(arr, 3));
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
