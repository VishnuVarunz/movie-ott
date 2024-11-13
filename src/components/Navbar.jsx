import React from "react";
import Home from "./Home";
import Displaymovie from "./Displaymovie";
import Landingpage from "./Landingpage";
import Watchhistory from "./Watchhistory";
import Watchlist from "./Watchlist";
import Login from "./Login"
import Register from "./Register";
import PageNotFound from "./PageNotFound";
import { NavLink, Route, Routes } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold text-danger fs-3" href="#">
            <span className="text-white fw-bold">Movie</span>FLIX
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/list"
                  className="nav-link text-white fw-medium"
                  activeClassName="active"
                >
                  WATCHLIST
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link text-white fw-medium" activeClassName="active">
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/home" className="nav-link text-white fw-medium" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/displaymovie" className="nav-link text-white fw-medium" activeClassName="active">
                  Display Movie
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/history" className="nav-link text-white fw-medium" activeClassName="active">
                  Watch History
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link text-danger fw-medium" activeClassName="active">
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/displaymovie" element={<Displaymovie />} />
        <Route path="/history" element={<Watchhistory />} />
        <Route path="/list" element={<Watchlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default Navbar;
