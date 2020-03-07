const clockContainer = document.querySelector(".js-clock"),
  clockTilte = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockTilte.innerHTML = `${hours}:${minutes}:${seconds}`;
}

function init() {
  getTime();
}

init();