// Selector
const todotext = document.querySelector('.todo-input');
const todobutton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event listeners
todobutton.addEventListener('click', addevent);
todoList.addEventListener('click', deleteCheck);
//Functions

function addevent(event) {
  //to prevent form from getting refreshed
  event.preventDefault();
  //todo-div
  const tododiv = document.createElement('div');
  tododiv.classList.add('todo');
  //creating lists
  const newTodo = document.createElement('li');
  newTodo.innerText = todotext.value;

  newTodo.classList.add('todo-item');
  tododiv.appendChild(newTodo);
  todotext.value = '';
  //check Mark button
  const completedbutton = document.createElement('button');
  completedbutton.innerHTML = '<i class="fas fa-check"></i>';
  completedbutton.classList.add('complete-btn');
  tododiv.appendChild(completedbutton);

  //Trash button
  const trashbutton = document.createElement('button');
  trashbutton.innerHTML = '<i class="fas fa-trash"></i>';
  trashbutton.classList.add('trash-btn');
  tododiv.appendChild(trashbutton);

  //Append to list
  todoList.appendChild(tododiv);
}

function deleteCheck(e) {
  const item = e.target;
  //delete
  if (item.classList[0] === 'trash-btn') {
    const todo = item.parentElement;
    todo.classList.add('fall');
    todo.addEventListener('transitionend', function () {
      todo.remove();
    });
  }

  //check mark
  if (item.classList[0] === 'complete-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}
