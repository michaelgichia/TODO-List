/**
*
* Box
*
*/

import React from 'react';
import {Col, Row} from 'react-styled-flexboxgrid';
import Wrapper from './Wrapper';
// import styled from 'styled-components';
function Box(props) {
  return (
  	<Wrapper>
	    <Row center="xs" className="box">
	      <Col xs={12} sm={12} md={6} lg={6}>
	      	{props.children}
	      </Col>
	    </Row>
  	</Wrapper>
  );
}

Box.propTypes = {

};

export default Box;
