import { useNavigate } from 'react-router-dom';
import './Bike.css'; 

const Quality = () => {
  const navigate = useNavigate();

  return (
    <div className="service-container">
      <div className="service-content">
        <h2 className="service-title">Quality Service</h2>
        <h2 className="service-subtitle">at Your Convenience</h2>

        <div className="service-features-grid">
          <div className="service-feature-item">
            <span className="service-icon">⚡</span>
            <div className="service-text">
              <h4>Fast Track Service</h4>
              <p>Eliminate the waiting period with our lightning fast service</p>
            </div>
          </div>

          <div className="service-feature-item">
            <span className="service-icon">👍</span>
            <div className="service-text">
              <h4>Reliable</h4>
              <p>Serviced with care for peak performance and safe rides</p>
            </div>
          </div>

          <div className="service-feature-item">
            <span className="service-icon">💵</span>
            <div className="service-text">
              <h4>Economical</h4>
              <p>Expert service made affordable for every two-wheeler</p>
            </div>
          </div>

          <div className="service-feature-item">
            <span className="service-icon">🔧</span>
            <div className="service-text">
              <h4>Expert Technicians</h4>
              <p>Highly trained technicians ensuring a quality service everytime</p>
            </div>
          </div>
        </div>

        <button className="service-btn" onClick={() => navigate('/service')}>
          Book a Service Now
        </button>
      </div>

      <div className="service-image-container">
           <img src="https://media.istockphoto.com/id/481678798/photo/male-mechanic-in-a-repair-workshop.jpg?s=612x612&w=0&k=20&c=I5OzNjwtx4ZNgHnFcg4K3blWPU3_dGN88B3Dx3b9jgo=" alt="Quality Service" className="service-main-img" />
      </div>
    </div>
  );
};

export default Quality;