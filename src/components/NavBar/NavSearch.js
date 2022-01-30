export const NavSearch = (props) => {
  return (
    <form
      onSubmit={props.onSubmit}
      className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
    >
      <input
        type="search"
        className="form-control form-control-dark"
        placeholder="Search..."
        aria-label="Search"
        onChange={props.onChange}
      />
    </form>
  );
};
