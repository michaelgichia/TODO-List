import styled from 'styled-components';
const Checkbox = styled.input`
 &:checked + label {
	  color:#757575 !important;
	  text-decoration: line-through !important;
	  font-style:italic !important;
`;
export default Checkbox;