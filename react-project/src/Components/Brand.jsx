import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Bike.css';


const BrandDetails = () => {
  const { brandName } = useParams(); 
  const navigate = useNavigate();

  const bikeModels = [
    { id: 1, name: `${brandName} Model X`, price: "₹85,000", year: "2021", km: "12,000 km" },
    { id: 2, name: `${brandName} Model Y`, price: "₹1,20,000", year: "2022", km: "5,000 km" },
    { id: 3, name: `${brandName} Special Edition`, price: "₹95,000", year: "2020", km: "18,000 km" },
  ];

  return (
    <div className="brand-details-container">
      <div className="header-section">
        <button className="back-btn" onClick={() => navigate(-1)}> ← Back </button>
        <h1>{brandName} Collections</h1>
      </div>

      <div className="bike-grid">
        {bikeModels.map((bike) => (
          <div key={bike.id} className="bike-card">
            <div className="bike-img-placeholder"></div>
            <div className="bike-info">
              <h3>{bike.name}</h3>
              <p className="bike-stats">{bike.year} | {bike.km}</p>
              <h2 className="bike-price">{bike.price}</h2>
              <button className="view-btn">View Details</button>
            </div>
          </div>




        ))}
      </div>
    </div>
  );
};

export default BrandDetails;