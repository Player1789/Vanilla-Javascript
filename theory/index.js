const title = document.querySelector("#title");

const CLICKED = "clicked";

function titleHandler() {
  title.classList.toggle(CLICKED);
}

function init() {
  title.addEventListener("click", titleHandler);
}

init();
