import styled from 'styled-components';
const Checkbox = styled.input`
 &:checked+label {
	  color:#757575 !important;
	  background:none;
	  text-decoration:line-through;
	  font-style:italic;
`;

export default Checkbox;