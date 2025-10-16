import "./App.css";

function App() {
  return (
    <main>
      {/*Navbar Section Starts*/}
      <section className="navbar">
        <div className="container">
          <div className="logo">Logo Here</div>
          <div className="menu">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Menu</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/*Navbar Section Ends*/}

      {/*Food Search Section Starts*/}
      <section className="food-search">
        <div className="container">
          <input type="text" placeholder="Search....." />
          <button>Search</button>
        </div>
      </section>
      {/*Food Search Section Ends*/}

      {/*Categories Section Starts*/}
      <section className="categories">
        <div className="container">
          <h2>Categories</h2>
          <div className="box">box 1</div>
          <div className="box">box 2</div>
          <div className="box">box 3</div>
        </div>
      </section>
      {/*Categories Section Ends*/}

      {/*Food Menu Section Starts*/}
      <section className="food-menu">
        <div className="container">
          <h2>Explore Food Menu</h2>
          <div className="box">Food menu 1</div>
          <div className="box">Food menu 2</div>
          <div className="box">Food menu 3</div>
          <div className="box">Food menu 3</div>
        </div>
      </section>
      {/*Food Menu Section Ends*/}

      {/*Social Section Starts*/}
      <section className="social">
        <div className="container">
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Linkedin</li>
          </ul>
        </div>
      </section>
      {/*Social Section Ends*/}

      {/*Footer Section Starts*/}
      <section className="footer">
        <div className="container">
          <p>
            All Rights Reserved. Designed by <a href="#">Sayak Mallick</a>
          </p>
        </div>
      </section>
      {/*Footer Section Ends*/}
    </main>
  );
}

export default App;
