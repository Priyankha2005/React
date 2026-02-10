import { useNavigate } from 'react-router-dom';
import './Bike.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
           <div className="hero-image-container" position="relative">
          <img 
            src="data:image/jpeg;base64,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" 
            alt="r15 Bike" 
            className="hero-bike" />  
        </div>
          <h1 className="main-title">The Right Choice</h1>
          <p className="sub-title">Buy Certified Second Hand Bikes Online</p>
          
          <div className="features-container">
            <div className="feature-badge">
              <span className="icon">⭐</span>
              <p>100% Refurbished</p>
            </div>
            <div className="feature-badge">
              <span className="icon">🛡️</span>
              <p>1 Year Warranty</p>
            </div>
            <div className="feature-badge">
              <span className="icon">🔄</span>
              <p>3 Free Services</p>
            </div>
            <div className="feature-badge">
              <span className="icon">💰</span>
              <p>Upto 85% Financing</p>
            </div>
          </div>

          <div className="brand-card">
            <h3>Shop by Brand</h3>
            <div className="brand-logos-mini">
              <img src="https://ik.imagekit.io/drivex/vehicle_icons/TVS.jpg?tr=f-avif,w-200,h-200,c-at_max" alt="TVS" onClick={() => navigate('/search')} />
              <img src="https://ik.imagekit.io/drivex/vehicle_icons/Royal%20Enfield.jpg?tr=f-avif,w-100,h-100,c-at_max" alt="R0yal Enfield" onClick={() => navigate('/search')} />
              <img src="https://ik.imagekit.io/drivex/vehicle_icons/Honda.jpg?tr=f-avif,w-100,h-100,c-at_max" alt="Honda" onClick={() => navigate('/search')} />
              <img src="https://ik.imagekit.io/drivex/vehicle_icons/KTM.jpg?tr=f-avif,w-100,h-100,c-at_max" alt="KTM" onClick={() => navigate('/search')} />   
            </div>
            <button className="view-all-btn" onClick={() => navigate('/select-city')}>
              All vehicles in Tiruppur <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>


</>
  );
};

export default Home;