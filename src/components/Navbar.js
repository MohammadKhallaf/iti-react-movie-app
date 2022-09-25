import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { Howl, Howler } from "howler";
import { AccountDropDown } from "./NavBar/AccountDropDown";
import UserContext from "../store/user-context";
import { TopNav } from "./NavBar/TopNav";
import { NavSearch } from "./NavBar/NavSearch";
import styled from "styled-components";

import clickAudioSrc from "../assets/audio/click.mp3";
import { useEffect } from "react";
const IconBadged = styled.span`
  outline: 3px solid var(--bs-dark);
  scale: 0.8;
`;

const Navbar = () => {
  const counter = useSelector((state) => state.favlist.quantity);
  const history = useHistory();
  const usrCtx = useContext(UserContext);
  const [query, setQuery] = useState("");

  const clickAudio = new Audio(clickAudioSrc);
  const sound = new Howl({
    src: [clickAudioSrc],
    preload: true,
  });
  const searchMovie = (e) => {
    setQuery(e.target.value);
  };
  const runSearch = (e) => {
    e.preventDefault();
    history.push(`/query/${query}`);
  };
  useEffect(() => {
    return sound.stop();
  }, [sound]);
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
              <NavLink className="nav-link btn shadow-none" to={"/favList"}>
                <span className="position-relative">
                  <i class="fas fa-heart fs-5 text-white-50"></i>
                  <IconBadged className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ">
                    {counter}
                  </IconBadged>
                </span>
              </NavLink>
            </li>
          </ul>
        ) : null}
        <button
          className="nav-link btn shadow-none"
          onClick={() => {
            usrCtx.toggleLang();
            sound.play();
          }}
        >
          <span className="position-relative">
            <i class="fas fa-globe-africa fs-5 text-white-50"></i>
            <IconBadged className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {usrCtx.lang}
            </IconBadged>
          </span>
        </button>
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
