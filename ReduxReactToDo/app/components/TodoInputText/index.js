import React from 'react';
import TextField from 'material-ui/TextField';
// import styled from 'styled-components';


class TodoInputText extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
				<TextField
				  hintText="Add a to-do"
				  fullWidth={true}
				/>
      </div>
    );
  }
}

TodoInputText.propTypes = {

};

export default TodoInputText;
