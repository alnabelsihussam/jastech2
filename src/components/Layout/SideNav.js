import React from "react";
import logo22 from "../img/logo22.png";

import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div>
      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <Link to="/" className="brand-link">
          <img
            src={logo22}
            alt=" Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".9" }}
          />
          <span className="brand-text font-weight-light">...</span>
        </Link>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              {/* <img src={logo22} alt="Logo" /> */}
              <Link to="/" className="brand-link">
                {/* <img
                  src={logo22}
                  alt=" Logo"
                  className="brand-image img-circle elevation-3"
                  style={{ opacity: ".8" }}
                /> */}
                <span className="brand-text font-weight-light">Home</span>
              </Link>
            </div>
          </div>
          {/* SidebarSearch Form */}
          {/* <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw" />
                </button>
              </div>
            </div>
          </div> */}
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
              <li className="nav-item menu-open">
                <Link to="/Mitarbeiter" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Mitarbeiter
                    <i className="right fas fa-angle-left" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/AddMitarbeiter" className="nav-link active">
                      <i className="far fa-circle nav-icon" />
                      <p>Add Mitarbeiter</p>
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <a href="./index2.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Dashboard v2</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="./index3.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Dashboard v3</p>
                    </a>
                  </li> */}
                </ul>
              </li>

              <li className="nav-item menu-open">
                <Link to="/Geräte" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Geräte
                    <i className="right fas fa-angle-left" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/AddGereat" className="nav-link active">
                      <i className="far fa-circle nav-icon" />
                      <p>Add Gerät</p>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
};

export default SideNav;
