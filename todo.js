const toDoContainer = document.querySelector('.toDo__contanier'),
	toDoList = toDoContainer.querySelector('.toDo__list'),
	toDoForm = toDoContainer.querySelector('.toDo__form'),
	toDoInput = toDoForm.querySelector('input');

const TODO_LS = 'toDos';

let toDoArray = [];

function deleteTodo(event) {
	const parentLi = event.target.parentNode;
	const currentId = parentLi.id;
	parentLi.remove();
	const cleanToDos = toDoArray.filter(function(i) {
		return i.id !== parseFloat(currentId);
	});
	toDoArray = cleanToDos;
	saveTodo(toDoArray);
}

function saveTodo(array) {
	localStorage.setItem(TODO_LS, JSON.stringify(array));
}

function addToDo(value) {
	const newId = Math.random();
	const li = document.createElement('li');
	const delBtn = document.createElement('button');
	const span = document.createElement('span');
	li.id = newId;
	delBtn.innerText = '❌';
	delBtn.addEventListener('click', deleteTodo);
	span.innerText = value;
	li.appendChild(span);
	li.appendChild(delBtn);
	toDoList.appendChild(li);
	toDoInput.value = '';
	const toDoObj = {
		text: value,
		id: newId
	};
	toDoArray.push(toDoObj);
	saveTodo(toDoArray);
}

function handleSubmit(event) {
	event.preventDefault();
	const toDoValue = toDoInput.value;
	addToDo(toDoValue);
}

function loadTodo() {
	const currentTodo = localStorage.getItem(TODO_LS);
	if (currentTodo !== null) {
		const parsedToDo = JSON.parse(currentTodo);
		parsedToDo.forEach(function(toDo) {
			addToDo(toDo.text);
		});
	}
}

function init() {
	loadTodo();
	toDoForm.addEventListener('submit', handleSubmit);
}
init();
