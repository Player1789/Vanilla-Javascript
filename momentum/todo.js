const toDoForm = document.querySelector('.js-toDoForm'),
	toDoInput = toDoForm.querySelector('input'),
	toDoList = toDoForm.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';

function paintToDo(text) {
	const li = document.createElement('li');
	const btn = document.createElement('button');
	const span = document.createElement('span');
	span.innerText = text;
	btn.innerText = '❌';
	li.appendChild(btn);
	li.appendChild(span);
	toDoList.appendChild(li);
}

function handleSubmit() {
	event.preventDefault();
	const currentValue = toDoInput.value;
	paintToDo(currentValue);
	toDoInput.value = '';
}

function loadToDos() {
	const toDos = localStorage.getItem(TODOS_LS);
	if (toDos != null) {
	}
}

function init() {
	loadToDos();
	toDoForm.addEventListener('submit', handleSubmit);
}
init();
