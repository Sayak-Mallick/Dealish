const Order = () => {
  return (
    <section className="food-search">
      <div className="container">
        <h2 className="text-center text-white">Fill this form to confirm your order.</h2>
        <form className="order">
          <fieldset>
            <legend>Selected Food</legend>
            <div className="food-menu-img">
              <img src="/images/menu-pizza.jpg" alt="Food" className="img-responsive img-curve" />
            </div>
            <div className="food-menu-desc">
              <h3>Food Title</h3>
              <p className="food-price">$2.3</p>
              <div className="order-label">Quantity</div>
              <input type="number" name="qty" className="input-responsive" value="1" required />
            </div>
          </fieldset>
          
          <fieldset>
            <legend>Delivery Details</legend>
            <div className="order-label">Full Name</div>
            <input type="text" name="full-name" placeholder="E.g. John Doe" className="input-responsive" required />
            <div className="order-label">Phone Number</div>
            <input type="tel" name="contact" placeholder="E.g. 9843xxxxxx" className="input-responsive" required />
            <div className="order-label">Email</div>
            <input type="email" name="email" placeholder="E.g. hi@email.com" className="input-responsive" required />
            <div className="order-label">Address</div>
            <textarea name="address" rows={10} placeholder="E.g. Street, City, Country" className="input-responsive" required></textarea>
            <input type="submit" name="submit" value="Confirm Order" className="btn btn-primary" />
          </fieldset>
        </form>
      </div>
    </section>
  )
}

export default Order 
