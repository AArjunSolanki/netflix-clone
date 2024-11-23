import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import "../assets/styles/header.scss";

const Header = () => {
  const navItems = [
    {
      label: "Movies",
      link: "/",
    },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <header className="header">
      <nav className="header__app-bar">
        <div className="container header__container">
          <button
            className="header__menu-btn"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <GrMenu />
          </button>
          <div className="header__logo">
            <Link to={`/`}>LOGO</Link>
          </div>
          <div className="header__nav-links">
            {navItems.map((item, index) => (
              <NavLink
                to={item?.link}
                key={index}
                className="header__nav-link"
                activeClassName="header__nav-link--active"
              >
                {item?.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      <div
        className={`header__drawer ${mobileOpen ? "header__drawer--open" : ""}`}
        onClick={handleDrawerToggle}
      >
        <div className="header__drawer-content">
          <div className="header__drawer-logo">LOGO</div>
          <ul className="header__drawer-list">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item?.link}
                  className="header__drawer-link"
                  activeClassName="header__drawer-link--active"
                >
                  {item?.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
