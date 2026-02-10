
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Bike.css';

const Bill = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [isBooked, setIsBooked] = useState(false);

    const [formData, setFormData] = useState({
        fullName: '',
        mobileNumber: '',
        address: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleBooking = (e) => {
        e.preventDefault();
        
        localStorage.setItem('userBooking', JSON.stringify(formData));
        
        setIsBooked(true);
        console.log("Data saved to LocalStorage:", formData);
    };

    if (!state) return <h2>No Booking Data Found!</h2>;

    if (isBooked) {
        return (
            <div className="thank-you-container">
                <div className="thank-you-card">
                    <h1>Thank You!</h1>
                    <p>Your booking for <strong>{state.brand} {state.model}</strong> has been received.</p>
                    <button className="home-btn" onClick={() => navigate('/')}>Back to Home</button>
                </div>
            </div>
        );
    }

    return (
        <div className="buy-page-wrapper">
            <div className="buy-container">
                <div className="bike-summary">
                    <img src={state.img} alt={state.model} />
                    <h3>{state.brand} {state.model}</h3>
                    <p className="buy-price">Final Amount: <span>₹{state.price}</span></p>
                </div>

                <div className="form-section">
                    <h2>Confirm Your Booking</h2>
                    <form onSubmit={handleBooking}>
                        <input 
                            type="text" 
                            name="fullName"
                            placeholder="Full Name" 
                            value={formData.fullName}
                            onChange={handleChange}
                            required 
                        />
                        <input 
                            type="tel" 
                            name="mobileNumber"
                            placeholder="Mobile Number" 
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            required 
                        />
                        <textarea 
                            name="address"
                            placeholder="Delivery Address" 
                            value={formData.address}
                            onChange={handleChange}
                            required
                        ></textarea>

                        <div className="payment-info">
                            <p>📍 Doorstep Delivery Available</p>
                            <p>🛡️ 7-Day Money Back Guarantee</p>
                        </div>
                        <button type="submit" className="confirm-btn">Book Now</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Bill;