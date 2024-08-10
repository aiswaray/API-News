import React from 'react';

const NavBar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <div className="bg-white text-dark fw-bold px-2 py-2 rounded"> News
            <span className="" style={{color:"blue"}}> API</span>
          </div>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div className="nav-link" style={{cursor:"pointer"}} onClick={() => setCategory("technology")}>Technology</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" style={{cursor:"pointer"}} onClick={() => setCategory("science")}>Science</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" style={{cursor:"pointer"}} onClick={() => setCategory("business")}>Business</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" style={{cursor:"pointer"}} onClick={() => setCategory("health")}>Health</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" style={{cursor:"pointer"}} onClick={() => setCategory("entertainment")}>Entertainment</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" style={{cursor:"pointer"}} onClick={() => setCategory("sports")}>Sports</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;