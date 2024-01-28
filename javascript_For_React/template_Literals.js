let object = { Myname: "Shubham", date: "1996-02-31", age: 26 };
const { Myname, date, age } = object;
console.log(
  `My name is ${Myname} and my age is ${age} and born in the year ${
    date.split("-")[0]
  }`
);
