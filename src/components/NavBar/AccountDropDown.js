import { useContext } from "react";

import { NavLink } from "react-router-dom";
import UserContext from "../../store/user-context";

export const AccountDropDown = () => {
  const usrCtx = useContext(UserContext);
  return (
    <> <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle outline-secondary rounded rounded-lg "
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {usrCtx.isLoggedIn ? "Mohammed" : "Account"}
        </button>
        <ul className="dropdown-menu" aria-labelledby="AccountdropdownMenu">
          <li>
            <NavLink
              exact
              to={"/login"}
              className={"dropdown-item"}
              onClick={usrCtx.logIn}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink exact to={"/register"} className={"dropdown-item"}>
              Register
            </NavLink>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <NavLink
              exact
              to={"/"}
              className={`dropdown-item ${
                usrCtx.isLoggedIn ? null : "disabled"
              }`}
              onClick={usrCtx.logOut}
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
