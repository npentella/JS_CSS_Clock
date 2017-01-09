const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

function setSecondHand(seconds) {
	var position = ((seconds / 60) * 360) + 90;
	secondHand.style.transform = `rotate(${ position }deg)`;
	return seconds;
};

function setTime() {
	var now = new Date();

	setSecondHand(now.getSeconds());
	if(!now.getSeconds()) {
		
	};
}

setInterval(setTime, 1000);