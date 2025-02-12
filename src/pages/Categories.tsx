import { Link } from 'react-router-dom'
import pizza from '../assets/images/pizza.jpg'
import burger from '../assets/images/burger.jpg'
import momo from '../assets/images/momo.jpg'

const Categories = () => {
  return (
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
  );
};

export default Categories; 
