import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow:hidden;
    background-color: #ffffff !important;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
    font-size: medium !important;
  }

	[type="checkbox"],
	[type="radio"] {
	  min-width: 20px !important;
    margin: 0 5px;
	}

  [type="checkbox"]:checked + label {
    color:#757575 !important;
    text-decoration: line-through !important;
    font-style:italic !important;
  }

  .edit-input {
    width: 100%
  }
  
  form {
    width: 100%;
  }

  ul {
    padding-left: 0px !important;
    -webkit-padding-start: 0px !important;
    list-style-type: none !important;
  }

  .text-field {
    margin: 10px !important;
  }

  .wrapper-label label {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .wrapper-label label:first-of-type {
    margin: 20%;
  }

  wrapper-label label:last-of-type {
    margin: 40%;
  }

  svg {
    fill: #d2d0d0;
  }

  svg:hover,
  svg:active {
    fill: #00bcd4;
    transition: .2s ease-out ;
    transition: .2s ease-in ;
  }
`;
