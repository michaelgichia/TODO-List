import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import NavBar from 'components/NavBar';
import TodoInputText from 'components/TodoInputText';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      	<header>
					<NavBar />
      	</header>
				<Grid fluid>
				  <Row>
				    <Col lgOffset={4} lg={8} xs={10} md={8}>
							<TodoInputText />
				    </Col>
				  </Row>
				</Grid>
      </div>
    );
  }
}


