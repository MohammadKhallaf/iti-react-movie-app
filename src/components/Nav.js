import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Nav = () => {
  const history = useHistory();
  let location = useLocation();
  let pageNum = parseInt(location.pathname.split("/")[2]) || 1; // #accessing page number from the location

  const prevPage = (event) => {
    event.preventDefault();
    if (pageNum > 1) {
      pageNum--;
      history.push(`/page/${pageNum}`);
    }
  };
  const nextPage = (event) => {
    event.preventDefault();
    pageNum++;
    history.push(`/page/${pageNum}`);
  };
  return (
    <nav className="w-100 bg-secondary p-3 rounded-top">
      <ul className="pagination d-flex justify-content-between align-items-center">
        <li className="page-item">
          <Button
            className={`page-link shadow-lg ${
              pageNum <= 1 ? "disabled" : null
            }`}
            onClick={prevPage}
          >
            Previous
          </Button>
        </li>

        <li className="page-item">
          <Button className="page-link shadow-lg" onClick={nextPage}>
            Next
          </Button>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
