/**
 * ==Functions Executions
 *  -- Local Scope
 *  -- Global Scope
 *  -- shadwing
 * == setTimeout execution
 * == Promises
 * == Async -- await
 * == Fetch
 */

// var fname = "mona";
// function display() {
// 	fname = "alaa";
// 	console.log(fname);
// 	var a = 3;
// 	var b = 5;
// 	return a + b;
// }

// var result = display();
// console.log("fname : ", fname);
// console.log(result);

// function greet() {
// 	var result = dotNet();
// 	console.log("Welcome From ITI");
// 	return result;
// }

// function dotNet() {
// 	console.log("Hello Dot net");
// 	return "ITI";
// }
// var output = greet();
// console.log(output);

/**  */

// function first() {
// 	console.log("first");
// 	second();
// 	console.log("End Of First");
// }
// function second() {
// 	setTimeout(function () {
// 		console.log("Second");
//     }, 2000 );

//     console.log("Welcome After second")
// 	return "ola";
// }

// first();

// setTimeout(function () {
// 	console.log("First");
// }, 2000);

// setTimeout(function () {
// 	console.log("Second");
// }, 1000);

// console.log("End");

// var x;
// setTimeout(function () {
// 	x = 10;
// }, 2000);
// console.log(x);
/*
var products;
setTimeout(function () {
	// request1
	products = [100, 200, 300];
	setTimeout(function () {
		var product = {
			id: products[0],
			name: "Book",
			price: 300,
		};

		setTimeout(function () {
			var price = product.price;
			console.log(price);
		}, 500);
	}, 1000);
}, 2000);
*/

/**
 *
 * == Pending
 * == fulfilled
 * == rejected
 *
 */

function getProductsList() {
	var myPromise = new Promise(function (x, y) {
		var products;
		setTimeout(function () {
			products; // = [100, 200, 300];
			if (products) {
				x(products);
			} else {
				y("Error on getting product List");
			}
		}, 2000);
	});

	return myPromise;
}

// function getProductDetails(productId) {
// 	return new Promise(function (resolve, reject) {
// 		setTimeout(function () {
// 			var product = {
// 				id: productId,
// 				name: "Box",
// 				price: 300,
// 			};

// 			product ? resolve(product) : reject("Error on getting product Details");
// 		}, 1000);
// 	});
// }

// function getPrice(product) {
// 	return new Promise(function (resolve, reject) {
// 		setTimeout(function () {
// 			var price = product.price;
// 			price ? resolve(price) : reject("Error on getting price");
// 		}, 500);
// 	});
// }

// async function execute() {
// 	try {
// 		var productList = await getProductsList();
// 		var product = await getProductDetails(productList[1]);
// 		var price = await getPrice(product);
// 		console.log(price);
// 	} catch (error) {
// 		console.log("From Catch ", error);
// 	}
// }

// execute();
// getProductsList()
// 	.then(function (productsList) {
// 		return getProductDetails(productsList[0]);
// 	})
// 	.then(function (product) {
// 		return getPrice(product);
// 	})
// 	.then(function (price) {
// 		console.log(price);
// 	})
// 	.catch(function (errorMsg) {
// 		console.log(errorMsg);
// 	});
/** -------------- */

// var response = fetch("https://jsonplaceholder.typicode.com/users");
// response
// 	.then(function (data) {
// 		return data.json();
// 	})
// 	.then(function (output) {
// 		console.log(output);
// 	});

// async function execute() {
// 	try {
// 		var response = await fetch("https://jsonplaceholder.typicode.com/users");
// 		var data = await response.json();
// 		console.log(data);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// execute();
