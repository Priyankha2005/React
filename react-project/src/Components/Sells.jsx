import React from 'react';
import './Bike.css';

const Sell = () => {
  return (
    <div className="container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Sell Bike Online in <span>Tiruppur</span></h1>
          <p className="sub-title">Get the <strong>Best Deals</strong> with DriveX</p>
          
          <div className="features-row">
            <div className="feat-item"><span className="icon">₹</span> Online Price Estimate</div>
            <div className="feat-item"><span className="icon">📄</span> Free Doorstep Evaluation</div>
            <div className="feat-item"><span className="icon">🔄</span> Instant Payment</div>
          </div>

          <div className="stats-row">
            <div className="stat"><h3>15k+</h3><p>Vehicles Purchased</p></div>
            <div className="stat"><h3>50+</h3><p>Stores</p></div>
            <div className="stat"><h3>1.4L+</h3><p>Happy Customers</p></div>
          </div>
        </div>

        <div className="pincode-card">
          <label>Enter your pincode</label>
          <input type="text" placeholder="eg. 560095" />
          <button className="proceed-btn">Proceed</button>
        </div>
      </div>

      <div className="info-section">
        <h2>Why Sell Your Two-Wheeler with DriveX?</h2>
        <p className="accent-text">We Make it an Easy Ride!</p>
        
        <div className="grid-container">
          <div className="card">
            <div className="card-icon">💰</div>
            <h4>Best Price Guaranteed</h4>
            <p>Get the best value for your two-wheeler with our expert evaluation.</p>
          </div>
          <div className="card">
            <div className="card-icon">📄</div>
            <h4>Hassle-free Documentation</h4>
            <p>Leave the hassle of paperwork to us and sell stress-free.</p>
          </div>
          <div className="card">
            <div className="card-icon">🕒</div>
            <h4>Fast and Secure Payment</h4>
            <p>Get instant payment on your account made through secure sources.</p>
          </div>
          <div className="card">
            <div className="card-icon">🔍</div>
            <h4>Free Doorstep Evaluation</h4>
            <p>Free doorstep evaluation for your two-wheeler on selling with us.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;