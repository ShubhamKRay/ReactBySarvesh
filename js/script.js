import Welcome from "./function.js";
import { sum as add, multiply } from "./function.js";
Welcome();
add(10, 20);
multiply(5 * 2);

// array destructuring
let arr1 = [10, 20, 30, 40];
let [n1, n2, , n3] = arr1;
console.log(n1, n2, n3);

//object destructuring

let obj1 = {
  id: 1,
  ename: "john",
};
let { ename } = obj1;
console.log(ename);

//rest and spread

let arr2 = [100, 200, 300];
let arr3 = [...arr2, 400, 500, 600];

console.log(...arr2); //100 200 300 <---spread
console.log(arr3); //[100,200,300,400,500,600] <----rest

function demo(n1, n2, n3, ...rest) {
  console.log(n1, n2, n3, rest); //rest
  console.log(...rest); //spread
}
demo(10, 20, 30, 40, 50, 60);
