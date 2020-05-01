const body = document.querySelector('body');

const imgNunmber = 3;

function loadImage() {
	const imgName = Math.floor(Math.random() * imgNunmber);
	const image = new Image();
	image.classList.add('bg_image');
	image.src = `image/${imgName + 1}.jpg`;
	body.prepend(image);
}

function init() {
	loadImage();
}

init();
