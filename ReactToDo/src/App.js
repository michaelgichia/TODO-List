import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super ()
    this.state = {
      'todos': [
        {id: 1, content: 'Learn React', isCompleted: false},
        {id: 2, content: 'Learn JSx', isCompleted: false},
        {id: 3, content: 'Learn ImmutableJs', isCompleted: false},
        {id: 4, content: 'Learn express', isCompleted: false}
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>To~Do</h2>
        </div>
        <div>
          <div className='Todo-input'>
            <form action="">
              <input type="text" />
            </form>
          </div>
          <div className='Todo-app'>
            <ul className='Todo-list'>
              {this.state.todos.map(todo =>
                <li key={todo.id}>
                  <input type="checkbox" defaultChecked={todo.isCompleted}/>
                  {todo.content}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
