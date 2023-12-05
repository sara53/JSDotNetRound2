/** Agenda
 * == Events
 *      -- add attributes
 *      -- attach function
 *      -- addEventLisenter
 * -----------------------------
 * Bom
 * -- Window
 * -- screen // self study
 * -- Navigator
 * -- history
 * -- location
 */

// var btn = document.getElementById("btn");
// var p = document.getElementById("content");

// function changeContent(x) {
// 	console.log("X : ", x.target);
// 	p.innerHTML = "Welcome Dot Net Track";
// }

// function changeStyle(color) {
// 	p.style.backgroundColor = color;
// }
// function execute() {
// 	changeStyle("green");
// }

// // btn.onclick = changeContent;
// btn.addEventListener("click", changeContent);
// btn.addEventListener("click", execute);

// btn.removeEventListener("click", execute);
/** Attach function */
// btn.onclick = changeContent;
// btn.onclick = changeStyle; // override

// btn.onmouseenter = changeStyle;
/**  */

// var input1 = document.getElementById("input1");
// var span = document.getElementsByTagName("span")[0];
// input1.addEventListener("focus", function () {
// 	input1.style.border = "2px solid blue";
// });
// input1.addEventListener("blur", function () {
// 	input1.style.border = "2px solid orange";
// });

// input1.addEventListener("input", function () {
// 	if (input1.value.length >= 3) {
// 		input1.style.border = "2px solid green";
// 		span.style.display = "none";
// 	} else {
// 		input1.style.border = "2px solid red";
// 		span.style.display = "block";
// 	}
// });

// function login(e) {
// 	e.preventDefault();
// 	console.log("Login success");
// }

// function first() {
// 	console.log("First");
// }
// function second(e) {
// 	e.stopPropagation();

// 	console.log("Second");
// }
// function third(e) {
// 	// e.stopPropagation();
// 	console.log("Third");
// }

/**----- BOM
 *  == Browser Object Model
 *
 *
 * -------- */
var myWind;
function openNewWindow() {
	myWind = window.open("about.html", "", "width=200,height=200");
}
function closeWindow() {
	myWind.close();
}
function moveToWindow() {
	myWind.moveTo(400, 400);
}
function moveByWindow() {
	myWind.moveBy(-100, -100);
}
function resizeToWindow() {
	myWind.resizeTo(300, 300);
}
function resizeByWindow() {
	myWind.resizeBy(100, 100);
}

/**  */
// function cb1() {
// 	open("about.html");
// }
// setTimeout(cb1, 2000);

// var i = 0;
// var myInterval = setInterval(function () {
// 	console.log(i++);
// }, 1000);

// setTimeout(function () {
// 	clearInterval(myInterval);
// }, 3000);

// var myInterval;
// var span = document.getElementsByTagName("span")[0];
// var i = 0;
// function start() {
// 	myInterval = setInterval(function () {
// 		span.innerHTML = ++i;
// 	}, 1000);
// }
// function stop() {
// 	clearInterval(myInterval);
// }

// var p = document.getElementsByTagName("p")[0];
// function startDown() {
// 	p.style.display = "block";
// 	setTimeout(function () {
// 		p.innerHTML = "<a href='#'>Google</a>";
// 	}, 3000);
// }
