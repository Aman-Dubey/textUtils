import React from "react";
import PropTypes from "prop-types";

const NavBar = (props) => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
        <div className="container-fluid">
          <a className={`navbar-brand text-${props.mode === 'dark' ? 'light' : 'dark'}`} href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link active text-${props.mode === 'dark' ? 'light' : 'dark'}`} aria-current="page" href="/">
                  {props.home}
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link  text-${props.mode === 'dark' ? 'light' : 'dark'}`} href="/about">
                  {props.about}
                </a>
              </li>
            </ul>
            <div className="form-check form-switch mx-4 ">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="toggle-dark-mode"
                onClick={props.darkModeHandler}
              />
              <label className={`form-check-label mx-1  text-${props.mode === 'dark' ? 'light' : 'dark'}`} htmlFor="toggle-dark-mode">
                Enable Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

NavBar.defaultProps = {
  name: "Default NavBar",
  about: "Default About",
  home: "Default Home",
};

export default NavBar;
