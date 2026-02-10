import { useNavigate } from 'react-router-dom';


const Ride= () => {
  const navigate = useNavigate();

  return (
    <div className="feature-container">
      <div className="feature-content">
        <h2 className="feature-title">Buy With Ease.</h2>
        <h2 className="feature-subtitle highlight">Ride with Peace.</h2>

        <div className="feature-list">
          <div className="feature-item">
            <span className="feature-number">01</span>
            <div className="feature-text">
              <h4>Endless Choices</h4>
              <p>Vast range of options in all categories</p>
            </div>
          </div>

          <div className="feature-item">
            <span className="feature-number">02</span>
            <div className="feature-text">
              <h4>Test It. Feel It.</h4>
              <p>Test ride to feel the quality before you buy</p>
            </div>
          </div>

          <div className="feature-item">
            <span className="feature-number">03</span>
            <div className="feature-text">
              <h4>Buy In a Blink</h4>
              <p>Buy without the stress of documentation</p>
            </div>
          </div>

          <div className="feature-item">
            <span className="feature-number">04</span>
            <div className="feature-text">
              <h4>The Right Choice</h4>
              <p>Rides that are just the right choice</p>
            </div>
          </div>
        </div>

        <button className="buy-now-btn" onClick={() => navigate('/buy')}>
          Buy Now
        </button>
      </div>

      <div className="feature-image-container">
        <img src="https://static.langimg.com/nbt/thumb/114532109/tvs-jupiter-125-finance-details-in-diwali.jpg?imgsize=1323425&width=1600&height=900&resizemode=75" alt="DriveX Feature" className="feature-main-img" />
      </div>
    </div>
  );
};

export default Ride;