const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setSecondHand(seconds) {
	var position = ((seconds / 60) * 360) + 90;
	secondHand.style.transform = `rotate(${ position }deg)`;
	return seconds;
};

function setMinuteHand(minutes) {
	var position = ((minutes / 60) * 360) + 90;
	console.log(minuteHand);
	minuteHand.style.transform = `rotate(${ position }deg)`;
}

function setTime() {
	var now = new Date();

	setSecondHand(now.getSeconds());
	if(!now.getSeconds()) {
		setMinuteHand(now.getMinutes());
	};
}

setInterval(setTime, 1000);