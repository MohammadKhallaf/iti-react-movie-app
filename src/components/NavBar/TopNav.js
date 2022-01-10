export const TopNav = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid ">{props.children}</div>
    </nav>
  );
};
