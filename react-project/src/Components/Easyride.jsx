import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Bike.css'; 

const Easy= () => {
  const navigate = useNavigate(); 

  return (
    <div className="sell-container">
      <div className="sell-content">
        <h2 className="sell-title">Selling Your Two-Wheeler?</h2>
        <h2 className="sell-subtitle highlight">We Make It An Easy Ride!</h2>

        <div className="sell-features-grid">     
          <div className="sell-feature-item">
            <span className="sell-icon">💵</span>
            <div className="sell-text">
              <h4>Best Price Guaranteed</h4>
              <p>Get the best value for your two-wheeler with our expert evaluation</p>
            </div>
          </div>

          <div className="sell-feature-item">
            <span className="sell-icon">📄</span>
            <div className="sell-text">
              <h4>Hassle-free Documentation</h4>
              <p>Leave the hassle of paperwork to us and sell stress-free</p>
            </div>
          </div>

          <div className="sell-feature-item">
            <span className="sell-icon">⏱️</span>
            <div className="sell-text">
              <h4>Fast and Secure Payment</h4>
              <p>Get instant payment on your account made through secure sources</p>
            </div>
          </div>

          <div className="sell-feature-item">
            <span className="sell-icon">🔍</span>
            <div className="sell-text">
              <h4>Free Doorstep Evaluation</h4>
              <p>Free doorstep evaluation for your two-wheeler on selling with us</p>
            </div>
          </div>
        </div>

        <button className="sell-now-btn" onClick={() => navigate('/sell')}>
          Sell Now
        </button>
      </div>

      <div className="sell-image-container">
        <img src="https://ik.imagekit.io/drivex/ik_homepage/SuzukiWeb.png?tr=f-avif,w-512,h-507" alt="Sell Two Wheeler" className="sell-main-img" />
      </div>
    </div>
  );
};

export default Easy;