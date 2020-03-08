const API_KEY = '973382767420543b990dd71fc9c9ccc0',
	weather = document.querySelector('.js-weather');

const COORDS_LS = 'coords';

function getWeather(lat, lon) {
	fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
		.then(function(response) {
			return response.json();
		})
		.then(function(json) {
			const temp = json.main.temp;
			const place = json.name;
			weather.innerText = `${temp} @ ${place}`;
		});
}

function saveCoords(cordObj) {
	console.log(cordObj);
	localStorage.setItem(COORDS_LS, JSON.stringify(cordObj));
}

function handleGeoSuccess(position) {
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	const cordObj = {
		latitude,
		longitude
	};
	saveCoords(cordObj);
	getWeather(cordObj.latitude, cordObj.longitude);
}

function handleGeoError() {
	console.log(`Can't access to geo location`);
}

function askForCords() {
	navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
	const loadedCords = localStorage.getItem(COORDS_LS);
	if (loadedCords === null) {
		askForCords();
	} else {
		const parsedCoords = JSON.parse(loadedCords);
		getWeather(parsedCoords.latitude, parsedCoords.longitude);
	}
}

function init() {
	loadCoords();
}

init();
