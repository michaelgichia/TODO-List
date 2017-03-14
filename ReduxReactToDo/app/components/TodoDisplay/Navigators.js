import React from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import Label from './Label';
import DeleteIcon from '../DeleteIcon';
import EditIcon from '../EditIcon';

const Navigators = (props) => {
	return (
		<Wrapper className="wrapper-label">
			<Label className="edit" onClick={props.onEdit}><EditIcon /></Label>
			<Label className="delete" onClick={props.onDelete}><DeleteIcon /></Label>
		</Wrapper>
	)
}
export default Navigators;