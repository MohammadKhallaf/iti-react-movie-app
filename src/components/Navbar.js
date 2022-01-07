import { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, NavLink, useHistory } from "react-router-dom";

const Navbar = () => {
  const counter = useSelector((state) => state.counter);
  const history = useHistory()
  const [query, setQuery] = useState("");
  const searchMovie = (e) => {
    setQuery(e.target.value);
  };
  const runSearch = (e) => {
    e.preventDefault();
    history.push(`/query/${query}`)

  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid ">
        <div className="navbar-brand fw-bold" href="#">
          Movie App
        </div>

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
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link " to={"/"}>
                Favourites {counter}
              </Link>
            </li>
          </ul>
          <div className="d-flex flex-wrap">
            <form
              onSubmit={runSearch}
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            >
              <input
                type="search"
                className="form-control form-control-dark"
                placeholder="Search..."
                aria-label="Search"
                onChange={searchMovie}
              />
            </form>

            <ul className="navbar-nav ">
              <li className="nav-item">
                <NavLink to={"/"} className="nav-link active">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <DropdownButton
                  variant="outline-secondary rounded rounded-lg"
                  title="Account"
                  id="input-group-dropdown-4"
                  align="end"
                >
                  <Dropdown.Item href="#">Login</Dropdown.Item>
                  <Dropdown.Item href="#">Register</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">Logout</Dropdown.Item>
                </DropdownButton>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
