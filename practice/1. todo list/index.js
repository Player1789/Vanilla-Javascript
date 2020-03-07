const plusBtn = document.querySelector(".header__icon");

function refreshLocalStorage() {
  const currentTodoArray = document.querySelectorAll(".list__content");
  const currentDoneArray = document.querySelectorAll(".lost__content.done");
  const localStorage = window.localStorage;
  localStorage.clear();
  localStorage.setItem("todoArray", currentDoneArray);
  localStorage.setItem("doneArray", currentDoneArray);
};

function settingList (){
    const TODO_LS = localStorage.getItem("todoArray");
    const DONE_LS = localStorage.getItem("doneArray");
    
    for (let index = 0; index < TODO_LS.length; index++) {
      const element = TODO_LS[index];
      const node = document.createElement("LI");
      node.appendChild(element);
      document.getElementsByClassName("list__container").appendChild(node);
};

function init() {
  settingList();
};

init();