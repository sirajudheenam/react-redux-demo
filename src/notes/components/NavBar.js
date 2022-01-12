import React from 'react';

class NavBar extends React.Component {
  render() {
    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">React Demo</a>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/notes">Notes</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">LogOut</a>
                </li>
              </ul>
          </div>
        </nav>
      </div>
    )
  }
}


export default NavBar;
