/**
 *  == prompet
 *  == alert
 *
 *
 */

// var fname = prompt("Enter Your name");
// console.log(fname);
// alert("you deleted this item");

// var result = confirm("Are you sure you want to delete this item");
// result
// 	? document.writeln("You deleted an item")
// 	: document.writeln("Operation Cancelled");
/**================== */
// var num1 = 10;
// var num2 = 50;

// console.log(num1 + num2);
// /** 30 line */
// var num1 = 2;
// var num2 = 4;

// console.log(num1 + num2);
// /** ---------- */
// var num1 = 2;
// var num2 = 4;

// console.log(num1 + num2);
/** ======== Functions
 *  == built in functions
 *  == user defines functions
 *      -- function statement (function declartion)
 *      -- function expression
 *      -- anonymous function
 *      -- callback function
 *
 *
 *
 * ========= */

// fun params ,, function statement
// function add(x, y) {
// 	x = x || 0;
// 	y = y || 0;
// 	console.log("x : ", x);
// 	console.log("y : ", y);

// 	return x + y;
// }

// var result = Number("10");
// console.log(result);
// test();
// console.log(add(4, 6));

// console.log(add(2, 3));
// var result = add(5, 6);
// console.log(result);
// console.log(result + 20);
// add("mona", "ali");
// console.log("-------------");
// add(true, true);
// console.log("------------");
// add("mona", 50);
// add(3, 5);
// add();
// console.log("---------");
// add(3, 6);
// console.log("--------------");
// add(3, 5, 7);
// // arguments
// add(2, 4);
// console.log("---------");
// add(6, 7);
// console.log("----------");
// add(1, 2);

/** ------------ function expression-------------- */
// var result = function (x, y) {
// 	console.log("x : ", x);
// 	console.log("y : ", y);
// 	console.log(x + y);
// };

// var test = result(5, 6);
// console.log(test);
/** --------------------------- */
// var fname;
// console.log(fname); // ali , undefined,error
// fname = "ali";
// console.log(fname);

/** */
// var fname;

// console.log(fname);
// fname = "ali";
// console.log(fname);

// function add(x, y) {
// 	console.log(x + y);
// }
// add(4, 5);

// var result = function (x, y) {
// 	console.log(x + y);
// };

// result(5, 6);
/** ---------------------- */

// var dotNetTrack = function () {
// 	console.log("hello dot net from iti");
// };

// var mearnTrack = function () {
// 	console.log("hello mearn track");
// };

// var result = function () {
// 	console.log("Welcome result");
// };

// function greet(myFun, num) {
// 	myFun();
// 	console.log(num);
// }

// var test = function (x) {
// 	console.log(x);
// 	console.log("Welcome");
// };

// greet(test, 5000);
// greet(function (x) {
// 	console.log(x);
// 	console.log("Welcome");
// },5000)
/*** ===========
 * length --
 * --------------------
 *  == charAt
 *  == indexOf
 *  == lastIndexOf
 *  == concat
 *  == split
 *  == startsWith
 *  == endsWith
 *  == toUpperCase
 *  == trimEnd
 *  == trimStart
 *---------------------------
  == length --
  -----------------
 * == push
   == unshift
   == pop
   == shifts
   == reverse
 * ========= */

// var students = [12, 466, 1, 5];
// // students.sort(function () {
// // 	// logic
// // });
// console.log(students.join("$$"));

// students.shift();
// students.shift();
// students.pop();
// students.unshift("alaa");
// students.unshift(123);
// students[0] = "mona"; // set
// console.log(students[1]); // get
// for (var i = 0; i < students.length; i++) {
// 	console.log(students[i]);
// }

// var fname = "      hello from iti     ";
// var result = fname.trimEnd() + "Dot net";
// console.log(result);

// console.log(result.split("=")[1]);
// for (var i = 0; i < fname.length; i++) {
// 	console.log(fname[i]);
// }

// var fname = "ahmed"; // demha

// var result = fname.split("").reverse().join("");
// console.log(result);

document.writeln("<h1 class='test'>Hello</h1>");
