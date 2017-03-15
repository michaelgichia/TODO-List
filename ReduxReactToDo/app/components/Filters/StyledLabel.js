import styled from 'styled-components';
const StyledLabel = styled.label`
  -ms-word-break:break-all;
  font-size: calc((2vh + 2vw) / 2);
  word-break:break-all;
  margin: 0 10px;
  word-break:break-word;
  -webkit-hyphens:auto;
  -moz-hyphens:auto;
  hyphens:auto;
  border: none;
  outline: none;
  cursor: pointer;
  color:  #505050;
  transition: .2s ease-out ;
  -webkit-appearance: none;
  -moz-appearance: none;
  &:hover {
    background-color: #00bcd4;
    text-align: center;
    border-radius: 5px;
    transition: .5s ease-out ;
    min-width: 40px;
    padding: 0 2px;
    }
  }
`;
export default StyledLabel;
