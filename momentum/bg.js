const body = document.querySelector('body');

const numberOfImage = 3;

function loadImage(number) {
	const image = new Image();
	image.src = `image/${number + 1}.jpg`;
	image.classList.add('bgImage');
	body.prepend(image);
}

function numberGenerator() {
	const number = Math.floor(Math.random() * numberOfImage);
	return number;
}

function init() {
	const number = numberGenerator();
	loadImage(number);
}
init();
