const object = {
  id: 1,
  name: "Shubham",
  age: 27,
  index: 0,
  address: "",
  isEligible: true,
  isMarried: false,
};

// falsy values : 0 , '' , null , undefined

//Here we use && operator if value is true.so it exicutes 2nd part
console.log(true && object.id); //It will exicutes 2nd part
console.log(false && object.id); //It will exicutes 1st part

//Here we use || operator if value is false.so it exicutes 2nd part
console.log(true || object.id); //It will exicutes 1st part
console.log(false || object.id); //It will exicutes 2nd part

console.log(object.isEligible && "I am eligible");
console.log(object.isMarried || "I am not married");

// falsy values works with || operator
console.log(object.school || "no data");
console.log(object.address || "no data");
console.log(object.index || "no data");

const value1 = object.id || "no data";
console.log(value1);

//It short circuits/1st part exicuted  for 0 and ''
//It will exicute 2nd part for null and undefined
const value2 = object.index ?? "no data";
console.log(value2);
const value3 = object.address ?? "no data";
console.log(value3);

// Either value is avilable or having false values 0 and '' then it will short circuits
//It will exicute 2nd part only if value is null or undefined
const value4 = object.id ?? "no data";
console.log(value4);
