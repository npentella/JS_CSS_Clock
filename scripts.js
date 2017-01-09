const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
	var now = new Date();
	console.log(now.getSeconds());
}

setInterval(setDate, 1000);