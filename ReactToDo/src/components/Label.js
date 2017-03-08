import React, {PropTypes} from 'react';

const Label = (props) => {
	return (
		<label 
			className="waves-effect waves-light" 
			id={props.id}
			onClick={props.onClick}>
			{props.children}
		</label>
	);
}
export default Label;

Label.propTypes = {
  id: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func
};