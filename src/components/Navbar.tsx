import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const Navbar = () => {
  return (
    <section className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/" title="Logo">
            <img src={logo} alt="Restaurant Logo" className="img-responsive" />
          </Link>
        </div>

        <div className="menu text-right">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <Link to="/foods">Foods</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="clearfix"></div>
      </div>
    </section>
  )
}

export default Navbar 
