const userForm = document.querySelector('.user-name__form'),
	userInput = userForm.querySelector('input'),
	userGreeting = document.querySelector('.user-name__greeting');

const USER_LS = 'userName',
	SHOWING_CN = 'showing';

function saveName(text) {
	localStorage.setItem(USER_LS, text);
}

function showGreeting(text) {
	userForm.classList.remove(SHOWING_CN);
	userGreeting.innerText = `Hello, ${text}!`;
	userGreeting.classList.add(SHOWING_CN);
}

function addUser(event) {
	event.preventDefault();
	const currentName = userInput.value;
	if (currentName === '') {
		askForName();
	} else {
		saveName(currentName);
		showGreeting(currentName);
	}
}

function askForName() {
	userForm.classList.add(SHOWING_CN);
	userGreeting.classList.remove(SHOWING_CN);
	userForm.addEventListener('submit', addUser);
}

function loadUserName() {
	const currentUserName = localStorage.getItem(USER_LS);
	if (currentUserName === null) {
		askForName();
	} else {
		showGreeting(currentUserName);
	}
}

function init() {
	loadUserName();
}

init();
