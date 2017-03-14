import React from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import Label from './Label';

const Navigators = (props) => {
	return (
		<Wrapper>
			<Label onClick={props.onEdit}>edit</Label>
			<Label onClick={props.onDelete}>delete</Label>
		</Wrapper>
	)
}
export default Navigators;