import React, {PropTypes} from 'react';
import StyledLabel from './StyledLabel';

const Label = (props) => {
	return (
		<StyledLabel 
			id={props.id}
			onClick={props.onClick}
		>
			{props.children}
		</StyledLabel>
	);
}
export default Label;

Label.propTypes = {
  id: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func
};