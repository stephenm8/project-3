//fill an array with the numbers from start to stop, in steps of step
let fillArray = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

//create an array of the numbers 1 - 100
let arrOf1To100 = fillArray(1, 100, 1);

//log the array for inspection
console.log(arrOf1To100);

let bitBatBotOrNot = n => {
  let result = "";

  if (n % 3 == 0) {
    result = `${result}Bit`;
  }
  if (n % 5 == 0) {
    result = `${result}Bat`;
  }
  if (n % 7 == 0) {
    result = `${result}Bot`;
  }

  return result;
};
console.log(bitBatBotOrNot(9));
console.log(bitBatBotOrNot(30));

let findAllbitBatBotOrNots1 = arr => {
  letnewArr = arr.map(findAllbitBatBotOrNot);
  return newArr;
};

let findAllbitBatBotOrNots2 = arr => {
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(bitBatBotOrNot(arr[i]));
  }
  return newArr;
};

let findAllbitBatBotOrNots3 = arr => {
  let newArr = [];
  for (var n of arr) {
    newArr.push(bitBatBotOrNot(n));
  }
  return newArr;
};

let findAllbitBatBotOrNots4 = arr => {
  let newArr = []
  newArr = arr.forEach(bitBatBotOrNot(arr[i]);
  return newArr;
};

//test the functions

findAllbitBatBotOrNots1(arrOf1To100);

findAllbitBatBotOrNots2(arrOf1To100);

findAllbitBatBotOrNots3(arrOf1To100);

findAllbitBatBotOrNots4(arrOf1To100);
