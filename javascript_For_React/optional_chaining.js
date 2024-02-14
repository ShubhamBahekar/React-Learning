const object = {
  id: 1,
  name: { firstName: "Shubham", lastName: "Bahekar" },
  age: 27,
  index: 0,
  address: {
    amgaon: { pincode: 441902 },
    gondia: { pincode: 441952 },
  },
  isEligible: true,
  isMarried: false,
};

//here 'ag' is not defined so it will reflect an error to handle this we use optional chaining(?)
const digit = 5;
const value = object.ag?.lastName ?? 0;
const total = digit + value;
total;
console.log(total);
