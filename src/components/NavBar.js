import { Outlet, Link } from 'react-router-dom';

const NavBar = () => (
  <>
    <header>
      <nav>
        <h2 className="heading">BookStore CMS</h2>
        <ul className="justifyContent">
          <li>
            <Link to="/">BOOKS</Link>
          </li>
          <li>
            <Link to="/categories">CATEGORIES</Link>
          </li>
        </ul>
      </nav>
    </header>
    <Outlet />
  </>
);

export default NavBar;
