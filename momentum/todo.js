const toDoForm = document.querySelector('.js-toDoForm'),
	toDoInput = toDoForm.querySelector('input'),
	toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';

let toDos = [];

function deleteToDo(event) {
	const li = event.target.parentElement;
	li.remove();
	console.dir(li.id);
	const cleanToDos = toDos.filter(function(toDo) {
		return toDo.id != parseInt(li.id);
	});
	console.dir(cleanToDos);
	toDos = cleanToDos;
	saveToDos();
}

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
	btn.addEventListener('click', deleteToDo);
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

function handleSubmit(event) {
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
