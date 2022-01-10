import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";

import { Badge } from "react-bootstrap";

import { AccountDropDown } from "./NavBar/AccountDropDown";
import UserContext from "../store/user-context";
import { TopNav } from "./NavBar/TopNav";
import { NavSearch } from "./NavBar/NavSearch";

const Navbar = () => {
  const usrCtx = useContext(UserContext);
  const counter = useSelector((state) => state.favlist.quantity);
  const history = useHistory();
  const [query, setQuery] = useState("");
  console.log("NAV:", !usrCtx.isLoggedIn);
  const searchMovie = (e) => {
    setQuery(e.target.value);
  };
  const runSearch = (e) => {
    e.preventDefault();
    history.push(`/query/${query}`);
  };
  return (
    <TopNav>
      <NavLink exact className="navbar-brand fw-bold" to={"/"}>
        Movie App
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse d-lg-flex justify-content-between px-5 px-lg-0"
        id="navbarNav"
      >
        {usrCtx.isLoggedIn ? (
          <ul className="navbar-nav ">
            <li className="nav-item">
              <NavLink
                className="nav-link btn btn-outline-success"
                to={"/favList"}
              >
                <span>
                  Favourites &nbsp;
                </span>
                <span className="badge bg-danger">{counter}</span>
              </NavLink>
            </li>
          </ul>
        ) : null}

        <div className="d-flex flex-wrap ms-auto">
          <NavSearch onSubmit={runSearch} onChange={searchMovie} />

          <ul className="navbar-nav ">
           <li className="nav-item">

              <AccountDropDown />
           </li>
            
          </ul>
        </div>
      </div>
    </TopNav>
  );
};
export default Navbar;
