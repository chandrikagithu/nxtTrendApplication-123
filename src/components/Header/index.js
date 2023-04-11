// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="bg-container">
    <nav className="nav-bar">
      <ul className="navbar-list">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo"
        />
        <li>
          <Link to="/" className="item-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="item-link">
            Products
          </Link>
        </li>
        <li>
          <Link to="/Cart" className="item-link">
            Cart
          </Link>
        </li>

        <button type="button" className="logout-button">
          Logout
        </button>
      </ul>
    </nav>
  </div>
)
export default Header
