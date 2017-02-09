// Stores all to do list
const todosArray = [];
// eslint-disable-next-line
const todos = document.querySelector('.todos');
// eslint-disable-next-line
const todosInput = document.querySelector('.todo-input');
// eslint-disable-next-line
const actions = document.querySelector('.actions');
// eslint-disable-next-line
const commpletedTodos = document.querySelector('.todos-complete');

// Render todos to the browser
function renderTodos(elTodo, array) {
  todos.innerHTML = array.map((todo, index) =>
    `
      <li>
        <input
          type="checkbox"
          class="checkbox"
          id="${index}"
          ${todo.completed ? 'checked' : ''} />
        <label
          class="label${index}"
          id="${index}">
          ${todo.todoContent}
        </label>
        <button class="transparent" id="${index}">&times;</button>
      </li>
    `).join('');
}

/**
 * Add an item to the todosArray and display in on the
 * the browser.
 *
*/
function addTodo(e) {
  const key = e.which || e.charCode;
  // eslint-disable-next-line
  const todoContent = document.querySelector('.todo-input');
  if (key === 13 && todoContent.value.length < 2) {
    e.preventDefault();
    return false;
  }
  if (key === 13 && todoContent.value.length > 2) {
    e.preventDefault();
    todosArray.push({ todoContent: todoContent.value, completed: false });
    renderTodos(todos, todosArray);
    todoContent.value = '';
    return false;
  }
  return renderTodos(todos, todosArray);
}

/**
 * Edit todo on double click on todoContent.
 * Creates a textarea element so as to edit todoContent
 * and push it on the same position in array.
 *
*/
function editTodo(e) {
  // with the value of its index(its position on the todosArray
  const position = parseInt(e.target.id, 10);
  // Todos has an input and label elements.
  // label id are created by concatinating `position`
  // and string `label`.
  const labelId = `.label${position}`;
  // eslint-disable-next-line
  const oldElement = document.querySelector(labelId);
  const parentNode = oldElement.parentNode;
  // Create an input element with the attributes below
  // eslint-disable-next-line
  const inputElement = document.createElement('textarea');
  inputElement.setAttribute('class', 'change-todo materialize-textarea');
  inputElement.setAttribute('id', `textarea${position}`);
  // Replace the child node label with input so
  // that we can edit the todoContent.
  const todoContent = todosArray[position];
  inputElement.value = todoContent.todoContent;
  parentNode.replaceChild(inputElement, oldElement);
  // eslint-disable-next-line
  const changeTodoInput = document.querySelector('.change-todo');
  changeTodoInput.addEventListener('keypress', (event) => {
    const key = event.which || event.charCode;
    const index = position;
    const newTodoContent = event.target.value;
    const todoObject = { todoContent: newTodoContent, completed: false };
    if (key === 13 && event.target.value.length > 2) {
      todosArray.splice(index, 1, todoObject);
      renderTodos(todos, todosArray);
    }
  });
}

/**
 * Toggle all todos from completed to active and vice versa.
*/
function toggleAll(e) {
  if (!e.target.matches('#toggle-all')) return;
  const noOfActiveTodos = (todosArray.filter(todo => !!todo.completed)).length;
  const noOfCompletedTodos = (todosArray.filter(todo => !todo.completed)).length;
  if (noOfActiveTodos < todosArray.length) {
    todosArray.map(todo => (todo.completed = true));
  } else if (noOfCompletedTodos < todosArray.length) {
    todosArray.map(todo => (todo.completed = false));
  } else {
    todosArray.map(todo => (todo.completed = !todo.completed));
  }
  renderTodos(todos, todosArray);
}

/**
 * Display all active todos.
*/
function activeTodo(e) {
  if (!e.target.matches('#active-todo')) return;
  const activeTodos = todosArray.filter(todo => !todo.completed);
  renderTodos(todos, activeTodos);
}

/**
 * Display all completed todos.
*/
function completedTodo(e) {
  if (!e.target.matches('#complete-todo')) return;
  const completedTodos = todosArray.filter(todo => !!todo.completed);
  renderTodos(todos, completedTodos);
}

/**
 * Display both completed and active todos.
*/
function allTodo(e) {
  if (!e.target.matches('#all-todo')) return;
  renderTodos(todos, todosArray);
}

/**
 * Toggle a todo from completed to active and vice versa.
*/
function toggleTodo(e) {
  const index = parseInt(e.target.id, 10);
  if (!e.target.matches('.checkbox')) return;
  const todo = todosArray[index];
  todo.completed = !(todo.completed);
  todosArray.splice(index, 1, todo);
  renderTodos(todos, todosArray);
}

/**
 * Delete todo when delete button is clicked.
 *
*/
function deleteTodo(e) {
  const index = parseInt(e.target.id, 10);
  if (!e.target.matches('button')) return;
  todosArray.splice(index, 1);
  renderTodos(todos, todosArray);
}

function handlers(e) {
  toggleTodo(e);
  deleteTodo(e);
}

function actionHandler(e) {
  allTodo(e);
  toggleAll(e);
  activeTodo(e);
  completedTodo(e);
}

todosInput.addEventListener('keypress', addTodo);
todos.addEventListener('click', handlers);
todos.addEventListener('dblclick', editTodo);
actions.addEventListener('click', actionHandler);
