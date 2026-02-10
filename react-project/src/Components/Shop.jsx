import { useNavigate } from 'react-router-dom';
import './Bike.css'; 

const FinanceSection = () => {
  const navigate = useNavigate();
  const handleBudgetClick = (price) => {
    navigate('/buy'); 
  };

  return (
    <div className="finance-container">
      <h2 className="section-title">Shop by <span className="highlight">Budget</span></h2>
      <div className="budget-grid">
        {['50,000', '75,000', '1,00,000', '1,25,000', '1,50,000', '2,00,000'].map((amount) => (
          <div key={amount} className="budget-card" onClick={() => handleBudgetClick(amount)}>
            <p>Less than</p>
            <h3>₹{amount}</h3>
          </div>
        ))}
      </div>

      <div className="finance-banner">
        <div className="finance-content">
          <p className="subtitle">Finance Solutions for Two-Wheelers</p>
          
          <div className="benefits">
            <div className="benefit-item">
              <span>💰</span>
              <p>Upto 85% of vehicle cost</p>
            </div>
            <div className="benefit-item">
              <span>✅</span>
              <p>Instant Approval</p>
            </div>
            <div className="benefit-item">
              <span>%</span>
              <p>Best-in-class Interest Rate</p>
            </div>
          </div>

          <button className="explore-btn" onClick={() => navigate('/buy')}>
            Explore Vehicles
          </button>
        </div>

        <div className="finance-image">
          <img src="https://ik.imagekit.io/drivex/ik_financier/Bike_Range.png?tr=f-avif,w-460" alt="Bikes" />
        </div>
      </div>
    </div>
  );
};

export default FinanceSection;