const clock = document.querySelector('.js-clock');

function loadTime() {
	const currentDate = new Date();
	const hours = currentDate.getHours();
	const minutes = currentDate.getMinutes();
	const seconds = currentDate.getSeconds();
	clock.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10
		? `0${seconds}`
		: seconds}`;
}

function init() {
	loadTime();
	setInterval(loadTime, 1000);
}

init();
