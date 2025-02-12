import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Social from './components/Social'
import Footer from './components/Footer'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Foods from './pages/Foods'
import FoodSearch from './pages/FoodSearch'
import CategoryFoods from './pages/CategoryFoods'
import Order from './pages/Order'
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/food-search" element={<FoodSearch />} />
        <Route path="/category-foods" element={<CategoryFoods />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      <Social />
      <Footer />
    </Router>
  )
}

export default App
