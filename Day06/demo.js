/** Agenda
 * -------- BOM ----------
 * == location
 * 	-- assign
 *  -- replace
 *  -- reload
 * == history
 *  ----- length
 * 	== back
 *  == forward
 * == navigator
 * --------------- Ajax ------------
 *------------- Cookies ----
  === Error Handling
 */

// function execute() {
// console.log(history.forward());
// location.reload();
// location.assign("https://www.google.com.eg/");
// location.replace("https://www.google.com.eg/");
// location.pathname = "/about.html";
// console.log(location.pathname);
// console.log(location.href); // get
// location.href = "https://www.google.com.eg/";
// }

/** ------------------- */
// function successCb(position) {
// 	console.log(" x : ", position.coords.latitude);
// 	console.log(" x : ", position.coords.longitude);
// }
// function errorCb() {
// 	console.log("user refused to access his location");
// }

// navigator.geolocation.getCurrentPosition(successCb, errorCb);
/**--------- Ajax
 * == Asynchrouns Javascript XML
 *
 *
 *
 * ----------- */
// var tbody = document.getElementsByTagName("tbody")[0];
// console.log(tbody);
// function getUserById() {
// 	var xhr = new XMLHttpRequest();

// 	xhr.onreadystatechange = function () {
// 		if (xhr.readyState == 4) {
// 			if (xhr.status == 200) {
// 				var response = JSON.parse(xhr.response);
// 				var tr = document.createElement("tr");
// 				var td1 = document.createElement("td");
// 				var td2 = document.createElement("td");
// 				var td3 = document.createElement("td");
// 				td1.innerHTML = response.id;
// 				td2.innerHTML = response.name;
// 				td3.innerHTML = response.email;
// 				tr.append(td1, td2, td3);
// 				tbody.append(tr);
// 			}
// 		}
// 	};
// 	xhr.open("GET", "https://jsonplaceholder.typicode.com/users/7");
// 	xhr.send("");
// }
/**-------------- Cookies -------------- */
// document.cookie = "username=mona";
// document.cookie = "password=1234";

// var myDate = new Date();
// myDate.setDate(myDate.getDate() + 3);

// var expireDate = new Date();
// expireDate.setDate(expireDate.getDate() - 1);

// document.cookie = "username=mona;expires=" + myDate;
// document.cookie = "password=123;expires=" + myDate;
// document.cookie = "username=alaa;expires=" + myDate;

// function saveCookie(key, value, expireDate) {
// 	document.cookie = key + "=" + value + ";expires=" + myDate;
// }

// function getAllCookies() {
// 	return document.cookie;
// }

// function deleteCookie(key) {
// 	document.cookie = key + "=any;expires=" + expireDate;
// }
// saveCookie("email", "a@a.com");

// deleteCookie("email");

/**------------------------ */
// console.log("First");
// console.logg("Second");
// console.log("Third");

// try {
// 	console.log("First");
// 	//throw "My Error";
// } catch (error) {
// 	console.log("Connection Error , please try again");
// } finally {
// 	document.writeln("Welcome From ITI");
// }

// function add(x, y) {
// 	if (arguments.length >= 2) throw "pass two arguments at least";
// 	else console.log(x + y);
// }
/**---------------- */
/** ================== */
