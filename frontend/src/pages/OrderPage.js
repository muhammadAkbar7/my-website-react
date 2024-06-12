import React from 'react';

function OrderPage() {
  return (
    <section>
      <h2>Order</h2>
      <article className="order">
        <p>Welcome to our order page! Here you can select products from our list and place your order.</p>
        <form action="/submit-order" method="POST">
          <fieldset className="inline">
            <legend>User Information</legend>
            <label htmlFor="name" className="required">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required autoFocus />
            <label htmlFor="email" className="required">Email:</label>
            <input type="email" id="email" name="email" required placeholder="Your email address" aria-required="true" />
            <label htmlFor="address" className="required">Address:</label>
            <textarea id="address" name="address" required placeholder="Enter your address" aria-required="true"></textarea>
            <label>Delivery Instructions (Maximum of 300 characters)</label>
            <textarea id="instructions" name="instructions" placeholder="Enter delivery instructions (optional)" maxLength="300"></textarea>
          </fieldset>
          <fieldset className="inline">
            <legend>Product Selection</legend>
            <table>
              <caption>You may only select one product</caption>
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Product</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>AGYM</td>
                  <td>
                    <input type="radio" id="product1" name="product" value="AGYM" required />
                    <label htmlFor="product1">Spinning Cat Scratcher Ball</label>
                  </td>
                  <td>$52.99</td>
                </tr>
                <tr>
                  <td>Jasonwell</td>
                  <td>
                    <input type="radio" id="product2" name="product" value="Jasonwell" required />
                    <label htmlFor="product2">Foldable Dog Pool</label>
                  </td>
                  <td>$27.25</td>
                </tr>
                <tr>
                  <td>Expawlorer</td>
                  <td>
                    <input type="radio" id="product3" name="product" value="Expawlorer" required />
                    <label htmlFor="product3">Dog Fence Window</label>
                  </td>
                  <td>$30.50</td>
                </tr>
                <tr>
                  <td>Lollimeow</td>
                  <td>
                    <input type="radio" id="product4" name="product" value="Lollimeow" required />
                    <label htmlFor="product4">Capsule Pet Travel Backpack</label>
                  </td>
                  <td>$59.00</td>
                </tr>
                <tr>
                  <td>Drool'd</td>
                  <td>
                    <input type="radio" id="product5" name="product" value="Drool'd" required />
                    <label htmlFor="product5">Cat Hamster Wheel</label>
                  </td>
                  <td>$349.75</td>
                </tr>
                <tr>
                  <td>Lollimeow</td>
                  <td>
                    <input type="radio" id="product6" name="product" value="Lollimeow" required />
                    <label htmlFor="product6">Sherpa Bubble Cat Carrier Backpack</label>
                  </td>
                  <td>$79.99</td>
                </tr>
              </tbody>
            </table>
            <p className="required">Please enter the quantity (between 1 and 100):</p>
            <input type="number" id="quantity" name="quantity" min="1" max="100" required placeholder="Enter quantity" aria-required="true" />
            <br />
            <button type="submit" id="submit" name="submit" value="submit">Submit Order</button>
          </fieldset>
        </form>
      </article>
    </section>
  );
}

export default OrderPage;
