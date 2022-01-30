import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Error = () => {
  return (
    <div className="container">
      <h1>You are trying to reach unreachable content</h1>
      <NavLink exact to={"/"} className={"btn btn-outline-danger"}>
        Go to home page
      </NavLink>
    </div>
  );
};
