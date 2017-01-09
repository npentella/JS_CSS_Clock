const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setSecondHand(seconds) {
	var position = ((seconds / 60) * 360) + 90;
	secondHand.style.transform = `rotate(${ position }deg)`;
};

function setMinuteHand(minutes) {
	var position = ((minutes / 60) * 360) + 90;
	minuteHand.style.transform = `rotate(${ position }deg)`;
};

function setHourHand(hours) {
	var position = (((hours % 12) / 12) * 360) + 90;
	console.log(position);
	hourHand.style.transform = `rotate(${ position }deg)`;
};

function setInitialTime() {
	var now = new Date();

	setSecondHand(now.getSeconds());
	setMinuteHand(now.getMinutes());
	setHourHand(now.getHours());
};

function setTime() {
	var now = new Date();

	setSecondHand(now.getSeconds());
	if(!now.getSeconds()) {
		setMinuteHand(now.getMinutes());
		if (!now.getMinutes()) {
			setHourHand(now.getHours());
		};
	};
}

setInitialTime();

setInterval(setTime, 1000);