let favNumber = 23;
let baseURL = "http://numbersapi.com";

// 1.
$.getJSON(`${baseURL}/${favNumber}?json`).then((data) => {
	console.log(data);
});

// 2.
let favNumbers = [23, 11, 22];
$.getJSON(`${baseURL}/${favNumbers}?json`).then((data) => {
	console.log(data);
});

// 3.
Promise.all(
	Array.from({ length: 4 }, () => {
		return $.getJSON(`${baseURL}/${favNumber}?json`);
	})
).then((facts) => {
	facts.forEach((data) => $("body").append(`<p>${data.text}</p>`));
});
