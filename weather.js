const API_KEY = '973382767420543b990dd71fc9c9ccc0',
	weatherSpan = document.querySelector('.weather');

const COORDS_LS = 'coords';

function getWeather(lat, lon) {
	fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
		.then(function(response) {
			return response.json();
		})
		.then(function(json) {
			const temp = json.main.temp;
			const place = json.name;
			weatherSpan.innerText = `${Math.floor(temp)}°C
            ${place}`;
		});
}

function saveCords(coordsObj) {
	localStorage.setItem(COORDS_LS, JSON.stringify(coordsObj));
}

function handleSuccess(i) {
	const latitude = i.coords.latitude;
	const longitude = i.coords.longitude;
	const coordsObj = {
		latitude,
		longitude
	};
	saveCords(coordsObj);
	getWeather(latitude, longitude);
}

function handleError() {
	console.log(`Can't access to geo location`);
}

function askForWeather() {
	navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
}

function loadWeather() {
	const loadedCoords = localStorage.getItem(COORDS_LS);
	if (loadedCoords === null) {
		askForWeather();
	} else {
		const parsedCoords = JSON.parse(loadedCoords);
		getWeather(parsedCoords.latitude, parsedCoords.longitude);
	}
}

function init() {
	loadWeather();
	setInterval(loadWeather, 600000);
}

init();
