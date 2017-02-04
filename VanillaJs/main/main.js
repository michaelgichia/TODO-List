// Todo store
var todosArray = []

// Event Listener
var todos = document.querySelector('.todos');
var todosInput = document.querySelector('.todo-input');

todosInput.addEventListener('keypress', addTodo)
todos.addEventListener('dblclick', editTodo)

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
  let todoContent = document.querySelector('.todo-input');
  
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
        <div class='style-li'>
          <div>
            <input type="checkbox" id="todo${index}">
          </div>
          <div>
            <label for="todo${index}" class="label${index}" id="${index}">${todo.todoContent}</label>
          </div>
        </div>
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
  var inputElement = document.createElement('input');
  inputElement.setAttribute('type', 'text');
  inputElement.setAttribute('class', 'change-todo');

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

    if (key === 13 && e.target.value.length > 2) {
      todosArray.splice(index, 1, todoObject)
      renderTodos(todos, todosArray)
    }  
  })
}

/**
 * Delete todo when delete button is clicked.
 *
 * @param {integer} position Position of a todo on the array.
*/
function deleteTodo (position) {
  todosArray.splice(position, 1);
  this.renderTodos();
}

/**
 * Interchange a todo as completed or active.
 *
 * @param {integer} position Position of a todo on the array.
*/
function toggleTodo (position) {
  todo = todosArray[position];
  todo.completed = !todo.completed;
  this.displayTodos();
}

/**
 * Interchange all todos as completed or active.
*/
function toggleAll () {
  var todo = todosArray;
  var noOfActiveTodos = (todo.filter(todo => todo.completed === true)).length;
  var noOfCompletedTodos = (todo.filter(todo => todo.completed === false)).length;
  
  if (noOfActiveTodos < todo.length) {
    todo.map(todo => todo.completed = true);

  } else if(noOfCompletedTodos < todo.length) {
    todo.map(todo => todo.completed = false);

  } else {
    todo.map(todo => todo.completed = !todo.completed);
  }

}


// function renderTodos () {
//   // Check if we have todos
//   if (!todosArray.length) {
//     console.log(`You do not have pending to~do`);
//   }

//   console.log(`Current to~dos: `);
//   // map through todos
//   todosArray.map((todo, index) => {
//     if(todo.completed) {
//       console.log(`(x) ${todo.todoContent}`);
//     } else {
//       console.log(`() ${todo.todoContent}`);
//     }
//   });
// }