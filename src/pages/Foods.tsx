import { Link } from 'react-router-dom'
import menuPizza from '../assets/images/menu-pizza.jpg'

const Foods = () => {
  return (
    <>
      <section className="food-search text-center">
        <div className="container">
          <form action="/food-search" method="POST">
            <input type="search" name="search" placeholder="Search for Food.." required />
            <input type="submit" name="submit" value="Search" className="btn btn-primary" />
          </form>
        </div>
      </section>

      <section className="food-menu">
        <div className="container">
          <h2 className="text-center">Food Menu</h2>

          <div className="food-menu-box">
            <div className="food-menu-img">
              <img src={menuPizza} alt="Chicke Hawain Pizza" className="img-responsive img-curve" />
            </div>

            <div className="food-menu-desc">
              <h4>Food Title</h4>
              <p className="food-price">$2.3</p>
              <p className="food-detail">
                Made with Italian Sauce, Chicken, and organic vegetables.
              </p>
              <br />
              <Link to="/order" className="btn btn-primary">Order Now</Link>
            </div>
          </div>

          <div className="clearfix"></div>
        </div>
      </section>
    </>
  )
}

export default Foods 
