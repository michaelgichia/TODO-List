import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectToDo from './selectors';
import NavBar from 'components/NavBar';
import Box from 'components/Box';
import TodoInputText from 'components/TodoInputText';
import TodoDisplay from 'components/TodoDisplay';

export class ToDo extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <header>
          <NavBar />
        </header>
        <Box>
          <TodoInputText />
          <TodoDisplay />
        </Box>
      </div>
    );
  }
}

ToDo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ToDo: makeSelectToDo(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
