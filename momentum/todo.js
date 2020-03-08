const toDoForm = document.querySelector('.js-toDoForm'),
	toDoInput = toDoForm.querySelector('input'),
	toDoList = toDoForm.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';

const toDos = [];

function saveToDos() {
	localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
	const li = document.createElement('li');
	const btn = document.createElement('button');
	const span = document.createElement('span');
	const newId = toDos.length + 1;
	li.id = newId;
	span.innerText = text;
	btn.innerText = '❌';
	li.appendChild(btn);
	li.appendChild(span);
	toDoList.appendChild(li);
	const toDoObj = {
		text: text,
		id: newId
	};
	toDos.push(toDoObj);
	saveToDos();
}

function handleSubmit() {
	event.preventDefault();
	const currentValue = toDoInput.value;
	paintToDo(currentValue);
	toDoInput.value = '';
}

function loadToDos() {
	const loadedToDos = localStorage.getItem(TODOS_LS);
	if (loadedToDos != null) {
		const parsedToDos = JSON.parse(localStorage.getItem(TODOS_LS));
		parsedToDos.forEach(function(i) {
			paintToDo(i.text);
		});
	}
}

function init() {
	loadToDos();
	toDoForm.addEventListener('submit', handleSubmit);
}
init();
