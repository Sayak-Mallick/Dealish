import { Link } from 'react-router-dom'

const CategoryFoods = () => {
  return (
    <>
      <section className="food-search text-center">
        <div className="container">
          <h2>Foods on <span className="text-white">"Category"</span></h2>
        </div>
      </section>

      <section className="food-menu">
        <div className="container">
          <h2 className="text-center">Food Menu</h2>
          <div className="food-menu-box">
            <div className="food-menu-img">
              <img src="/images/menu-pizza.jpg" alt="Food" className="img-responsive img-curve" />
            </div>
            <div className="food-menu-desc">
              <h4>Food Title</h4>
              <p className="food-price">$2.3</p>
              <p className="food-detail">Made with Italian Sauce, Chicken, and organic vegetables.</p>
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

export default CategoryFoods 
