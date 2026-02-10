import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
  const navigate = useNavigate();
  const brands = [
    { name: 'TVS', logo: 'https://ik.imagekit.io/drivex/vehicle_icons/TVS.jpg?tr=f-avif,w-100,h-100,c-at_max' },
    { name: 'ROYAL ENFIELD', logo: 'https://ik.imagekit.io/drivex/vehicle_icons/Royal%20Enfield.jpg?tr=f-avif,w-100,h-100,c-at_max' },
    { name: 'HONDA', logo: 'https://ik.imagekit.io/drivex/vehicle_icons/Honda.jpg?tr=f-avif,w-100,h-100,c-at_max' }
  ];

  return (
    <div className="search-container">
      <h3>Popular Brands</h3>
      <div className="brand-list">
        {brands.map(brand => (
          <div key={brand.name} onClick={() => navigate(`/brand/${brand.name}`)}>
            <img src={brand.logo} alt={brand.name} />
            <p>{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SearchPage;