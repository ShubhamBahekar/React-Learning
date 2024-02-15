const array = ["banana", "orange", "apple", ",mango", "grapes"];

//syntax is array.slice(start,end)
//output is orange apple mango
//It will show index values from 1 to 3
const sort_InNewArray = array.slice(1, 4);
console.log(sort_InNewArray);

//output is apple mango grapes
//it will show all values from index 2
const sort_InNewArray2 = array.slice(2);
console.log(sort_InNewArray2);

//output is mango grapes
//it will show last 2 index values
const sort_InNewArray3 = array.slice(-2);
console.log(sort_InNewArray3);
