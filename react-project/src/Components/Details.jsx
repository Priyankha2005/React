import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BikeDetails = () => {
  const { state } = useLocation(); 
  const navigate = useNavigate();

  if (!state) return <h2>No Bike Data Found!</h2>;

  return (
    <div className="details-page">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      
      <div className="details-container">
        <div className="details-image-section">
          <img src={state.img} alt={state.model} />
        </div>
        <div className="details-info-section">
          <span className="brand-tag">{state.brand}</span>
          <h1>{state.model}</h1>
          <p className="price-text">Price: ₹{state.price}</p>
        <div className="specs-grid">
            <div className="spec-item"><strong>Year:</strong> {state.year}</div>
            <div className="spec-item"><strong>KMs Driven:</strong> {state.km}</div>
            <div className="spec-item"><strong>Location:</strong> {state.location || 'Chennai'}</div>
            <div className="spec-item"><strong>Condition:</strong> {state.specs}</div>
          </div>
        <button className="book-now-btn" onClick={() => navigate(`/buy/${state.id}`, { state })}>
            Proceed to Buy
          </button>
        </div>
      </div>
    </div>
  );
};
export default BikeDetails;