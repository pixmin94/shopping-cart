import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <nav>
        <h3 className="logo">Rabbits and Carrots</h3>
        <ul className="navigation">
          <Link to="/">
            <li className="navigation__item">Home</li>
          </Link>

          <Link to="/shop">
            <li className="navigation__item">Shop</li>
          </Link>

          <Link to="/cart">
            <li className="navigation__item">Cart</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;