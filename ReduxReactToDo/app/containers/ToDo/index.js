import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect';
import makeSelectToDo from './selectors';
import * as TodoActions from './actions';
import NavBar from 'components/NavBar';
import Box from 'components/Box';
import TodoInputText from 'components/TodoInputText';
import TodoDisplay from 'components/TodoDisplay';

export class ToDo extends React.Component { // eslint-disable-line react/prefer-stateless-function

  handleAddTodo(input) {
    return this.props.actions.addToDo(input)
  }
  render() {
    return (
      <div>
        <header>
          <NavBar />
        </header>
        <Box>
          <TodoInputText {...this.props.actions}/>
          <TodoDisplay {...this.props.ToDo} {...this.props.actions}/>
        </Box>
      </div>
    );
  }
}

ToDo.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  ToDo: makeSelectToDo(),
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
