// Todo store
var todosArray = []
// Event Listener
var todos = document.querySelector('.todos');
var todosInput = document.querySelector('.todo-input');
var actions = document.querySelector('.actions');

todosInput.addEventListener('keypress', addTodo)
todos.addEventListener('click', handlers)
todos.addEventListener('dblclick', editTodo)
actions.addEventListener('click', actionHandler)

/**
 * Add an item to the todosArray and display in on the
 * the browser.
 * 
 * @param {boolean} completed Differentiate completed or 
 *                  active todos.
*/
function addTodo (e) {
  var key = e.which || e.charCode
  // Select input tag value with class`todo-input`
  var todoContent = document.querySelector('.todo-input');
  // Prevent page reload on empty values
  if (key === 13 && todoContent.value.length < 2) {
    e.preventDefault();
    return false;
  }
  // Check if the key is charCode 13/entering key
  if (key === 13 && todoContent.value.length > 2) {
    e.preventDefault();
    todosArray.push({todoContent: todoContent.value, completed: false});
    // Call renderTodos with the new todo items
    renderTodos(todos, todosArray)
    // Initialize the input to blank
    todoContent.value = '';
    // Avoid page reload
    return false;
  }
}

/**
 * Check if we have todos and display them on the browser.
*/
function renderTodos (todos, todosArray) {
  todos.innerHTML = todosArray.map((todo, index) => {
    return `
      <li>
        <input type="checkbox" class="checkbox" id="${index}" ${todo.completed ? "checked" : ""} />
        <label class="label${index}" id="${index}">${todo.todoContent}</label>
        <button class="transparent" id="${index}">&times;</button>
      </li>
    `
  }).join('');
}

/**
 * Edit todo on double click on todoContent.
 * We create and input html element to edit 
 * todoContent and push it on the same array position.
 * Call renderTodo function to display new todoContent
 *
 * @param {integer} position Position of a todo on the array.
 * @param {string} todoContent Todo content.
*/
function editTodo (e) {  
  // When a todo is created, it is set id attribute
  // with the value of its index(its position on the todosArray
  // that stores all todos).
  var position = parseInt(e.target.id);
  // Todos has an input and label elements.
  // label id are created by concatinating position
  // and string `label`.
  // We can access the label dynamically because position
  // are unique, index of todos object in the todosArray.
  var labelId = `.label${position}`
  var oldElement = document.querySelector(labelId)
  var parentNode = oldElement.parentNode
  // Create an input element with the attributes below
  var inputElement = document.createElement('textarea');
  inputElement.setAttribute('class', 'change-todo materialize-textarea');
  inputElement.setAttribute('id', `textarea${position}`);
  // Replace the child node label with input so 
  // that we can edit the todoContent.
  var todoContent = todosArray[position];
  inputElement.value = todoContent.todoContent;
  parentNode.replaceChild(inputElement, oldElement)
  // Get the class of newly create input element.
  var changeTodoInput = document.querySelector('.change-todo');
  // At this point, We are editing the todoContent.
  // The below function is similar as to add a new todo.
  changeTodoInput.addEventListener('keypress', function (e) {
    var key = e.which || e.charCode
    var index = position
    var todoContent = e.target.value
    var todoObject = {todoContent: todoContent, completed: false}
    // Make sure is charCode 13
    if (key === 13 && e.target.value.length > 2) {
      todosArray.splice(index, 1, todoObject)
      renderTodos(todos, todosArray)
    }  
  })
}

function actionHandler (e) {
  allTodo(e);
  toggleAll(e);
  activeTodo(e);
  completedTodo(e);
}

/**
 * Toggle all todos as completed or active.
*/
function toggleAll (e) {
  if (!e.target.matches('#toggle-all')) return;
  var noOfActiveTodos = (todosArray.filter(todo => !!todo.completed)).length;
  var noOfCompletedTodos = (todosArray.filter(todo => !todo.completed)).length;

  if (noOfActiveTodos < todosArray.length) {
    todosArray.map(todo => todo.completed = true);

  } else if(noOfCompletedTodos < todosArray.length) {
    todosArray.map(todo => todo.completed = false);

  } else {
    todosArray.map(todo => todo.completed = !todo.completed);

  }
  renderTodos(todos, todosArray)
}

/**
 * Show active todos.
*/
function activeTodo (e) {
  if (!e.target.matches('#active-todo')) return;
  var activeTodos = todosArray.filter( todo => !todo.completed)
  renderTodos(todos, activeTodos)
}

/**
 * Show completed todos.
*/
function completedTodo (e) {
  if (!e.target.matches('#complete-todo')) return;
  var completedTodos = todosArray.filter( todo => !!todo.completed)
  renderTodos(todos, completedTodos)
}


/**
 * Show all todos.
*/
function allTodo (e) {
  if (!e.target.matches('#all-todo')) return;
  renderTodos(todos, todosArray)
}

function handlers (e) {
  toggleTodo(e);
  deleteTodo(e);
}

/**
 * Interchange a todo as completed or active.
 *
 * @param {integer} position Position of a todo on the array.
*/
function toggleTodo (e) {
  var index = parseInt(e.target.id)
  if (!e.target.matches('.checkbox')) return;
  var todo = todosArray[index];
  todo.completed = !(todo.completed);
  todosArray.splice(index, 1, todo)
  renderTodos(todos, todosArray); 
}

/**
 * Delete todo when delete button is clicked.
 *
*/
function deleteTodo (e) {
  var index = parseInt(e.target.id)
  if (!e.target.matches('button')) return;
  todosArray.splice(index, 1)
  renderTodos(todos, todosArray)
}

