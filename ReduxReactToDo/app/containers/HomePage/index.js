import React from 'react';
import NavBar from 'components/NavBar';
import Box from 'components/Box';
import TodoInputText from 'components/TodoInputText';
import TodoDisplay from 'components/TodoDisplay';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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




