import { useNavigate } from 'react-router-dom';

const CitySelection = () => {
  const navigate = useNavigate();
  const cities = ["Coimbatore", "Tiruppur", "Salem", "Madurai", "Chennai","Trichy","Namakkal"];

  return (
    <div className="modal-overlay">
      <h2>Select Your City</h2>
      <div className="city-grid">
        {cities.map(city => (
          <button key={city} onClick={() => navigate('/buy')}>
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};
export default CitySelection;