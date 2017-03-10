/**
*
* Box
*
*/

import React from 'react';
import {Col} from 'react-styled-flexboxgrid';
import Wrapper from './Wrapper';
// import styled from 'styled-components';
function Box(props) {
  return (
  	<Wrapper>
			<Col xs={12} sm={12} md={6} lg={6}>
				{props.children}
			</Col>
  	</Wrapper>
  );
}

Box.propTypes = {
	children: React.PropTypes.any,
};

export default Box;
