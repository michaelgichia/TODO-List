import React from 'react';

export default function NavBar() {
  return (
    <header>
      <nav>
        <div className="nav-wrapper">
          <a className="brand-logo right"><i className="material-icons">today</i></a>
          <a data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="side-nav" id="mobile-demo">
            <li><a>Home</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
