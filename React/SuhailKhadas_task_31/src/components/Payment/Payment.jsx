import React, { useContext, useState } from 'react';
import {Cart} from '../../index.jsx';
import CartContext from "../context/CartContext.jsx";
const Payment = () => {
  const { items, totalAmount, clearCart } = useContext(CartContext);
  const [paymentData, setPaymentData] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    email: '',
    address: '',
  });
  const [loading, setLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...paymentData,
          cartItems,
          totalAmount,
        }),
      });

      if (response.ok) {
        setOrderPlaced(true);
        clearCart();
        setPaymentData({
          cardName: '',
          cardNumber: '',
          expiryDate: '',
          cvv: '',
          email: '',
          address: '',
        });
        setTimeout(() => {
          window.location.href = '/';
        }, 3000);
      } else {
        alert('Payment failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during payment processing.');
    } finally {
      setLoading(false);
    }
  };

  if (orderPlaced) {
    return (
      <div className="payment-success">
        <h2>✓ Order Placed Successfully!</h2>
        <p>Thank you for your purchase. Redirecting to home...</p>
      </div>
    );
  }

  return (
    <div className="payment-container">
      <div className="payment-wrapper">
        <h1>Payment Gateway</h1>

        <div className="order-summary">
          <h2>Order Summary</h2>
          {cartItems.length > 0 ? (
            <>
              <div className="cart-items-preview">
                {cartItems.map((item) => (
                  <div key={item.id} className="preview-item">
                    <span>{item.name}</span>
                    <span>x{item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="total-section">
                <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
              </div>
            </>
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="payment-form">
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={paymentData.email}
              onChange={handleInputChange}
              required
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Shipping Address *</label>
            <input
              type="text"
              id="address"
              name="address"
              value={paymentData.address}
              onChange={handleInputChange}
              required
              placeholder="123 Main Street, City, State, ZIP"
            />
          </div>

          <div className="form-group">
            <label htmlFor="cardName">Cardholder Name *</label>
            <input
              type="text"
              id="cardName"
              name="cardName"
              value={paymentData.cardName}
              onChange={handleInputChange}
              required
              placeholder="John Doe"
            />
          </div>

          <div className="form-group">
            <label htmlFor="cardNumber">Card Number *</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={paymentData.cardNumber}
              onChange={handleInputChange}
              required
              placeholder="1234 5678 9012 3456"
              maxLength="19"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date *</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={paymentData.expiryDate}
                onChange={handleInputChange}
                required
                placeholder="MM/YY"
                maxLength="5"
              />
            </div>

            <div className="form-group">
              <label htmlFor="cvv">CVV *</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={paymentData.cvv}
                onChange={handleInputChange}
                required
                placeholder="123"
                maxLength="4"
              />
            </div>
          </div>

          <button
            type="submit"
            className="pay-button"
            disabled={loading || cartItems.length === 0}
          >
            {loading ? 'Processing...' : `Pay $${totalAmount.toFixed(2)}`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;