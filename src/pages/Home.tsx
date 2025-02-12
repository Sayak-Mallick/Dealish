import { Link } from 'react-router-dom'
import pizza from '../assets/images/pizza.jpg'
import burger from '../assets/images/burger.jpg'
import momo from '../assets/images/momo.jpg'
import menuPizza from '../assets/images/menu-pizza.jpg'

const Home = () => {
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

      <section className="categories">
        <div className="container">
          <h2 className="text-center">Explore Foods</h2>

          <Link to="/category-foods">
            <div className="box-3 float-container">
              <img src={pizza} alt="Pizza" className="img-responsive img-curve" />
              <h3 className="float-text text-white">Pizza</h3>
            </div>
          </Link>

          <Link to="/category-foods">
            <div className="box-3 float-container">
              <img src={burger} alt="Burger" className="img-responsive img-curve" />
              <h3 className="float-text text-white">Burger</h3>
            </div>
          </Link>

          <Link to="/category-foods">
            <div className="box-3 float-container">
              <img src={momo} alt="Momo" className="img-responsive img-curve" />
              <h3 className="float-text text-white">Momo</h3>
            </div>
          </Link>

          <div className="clearfix"></div>
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

        <p className="text-center">
          <Link to="/foods">See All Foods</Link>
        </p>
      </section>
    </>
  )
}

export default Home 
