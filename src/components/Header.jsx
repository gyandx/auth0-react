/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

import icon from "../assets/images/snow.svg";
import userIcon from "../assets/images/user.svg";
import profileIcon from "../assets/images/profile.svg";
import logoutIcon from "../assets/images/logout.svg";

const Header = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const { user, isAuthenticated, logout } = useAuth0();
  return (
    <header>
      <nav className="nav-container container">
        <div className="menu-left">
          <img src={icon} alt="logo" className="logo-img" />
          <span>Auth0</span>
        </div>
        <div className="menu-right">
          <div className="profile-pic">
            {isAuthenticated ? (
              <img
                src={user.picture}
                alt="user"
                onClick={() => setIsVisible(!isVisible)}
              />
            ) : null}
          </div>
          {isAuthenticated ? (
            <div className="menu-container">
              <ul className={`user-menu ${isVisible ? "active" : ""}`}>
                <div className="footer">
                  <li className="user-menu-item">
                    <a className="user-menu-link" href="#">
                      <span>{user.given_name || user.name.split("@")[0]}</span>
                      <img src={userIcon} className="icons" alt="user-icon" />
                    </a>
                  </li>
                  <li className="user-menu-item">
                    <a className="user-menu-link" onClick={() => (navigate("/profile"))}>
                      <span>Profile</span>
                      <img
                        src={profileIcon}
                        className="icons"
                        alt="profile-icon"
                      />
                    </a>
                  </li>
                  <li className="user-menu-item">
                    <a className="user-menu-link" onClick={() => logout({returnTo: window.location.origin + '/auth0-react'})}>
                      <span>Logout</span>
                      <img
                        src={logoutIcon}
                        className="icons"
                        alt="logout-icon"
                      />
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          ) : null}
        </div>
      </nav>
    </header>
  );
};

export default Header;
