const API_KEY = '973382767420543b990dd71fc9c9ccc0';

const COORDS_LS = 'coords';

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
		console.log('yes');
		askForCords();
	} else {
		// get weather
	}
}

function init() {
	loadCoords();
}

init();
