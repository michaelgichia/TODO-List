import React from 'react';
import TextField from 'material-ui/TextField';
// import styled from 'styled-components';


class TodoInputText extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)
    this.state = {
      value: ""
    }
    this.handleInput = this.handleInput.bind(this)
    this.handelSubmit = this.handelSubmit.bind(this)
  }
  
  handelSubmit(e, value) {
    e.preventDefault()
    this.props.addTodo(value)
    this.setState({value: ""})
  }

  handleInput(e) {
    this.setState({value: e.target.value})
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handelSubmit(e, this.state.value)}>
          <TextField
            hintText="Add a to-do"
            fullWidth={true}
            value={this.state.value}
            onChange={this.handleInput}
          />
        </form>
      </div>
    );
  }
}

TodoInputText.propTypes = {

};

export default TodoInputText;
