import React from 'react';
// import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';

function NavBar() {
  return (
    <div>
			<AppBar
				title="Title"
				iconClassNameRight="muidocs-icon-navigation-expand-more"
			/>
    </div>
  );
}

NavBar.propTypes = {

};

export default NavBar;

