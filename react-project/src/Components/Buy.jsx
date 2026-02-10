import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Bike.css';

const Buy = () => {
    const navigate = useNavigate();

    const brandImages = {
        "Royal Enfield": "https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/classic-350/new/dark-stealth-black/dark-stealth-black_0000.png",
        "KTM": "https://www.ktmindia.com/-/media/images/ktm/booking/ktm-pngs-and-webps/ktm-rc-390/rc-390-electronic-orange.webp",
        "Honda": "https://www.honda2wheelersindia.com/_next/image?url=https%3A%2F%2Fedge.sitecorecloud.io%2Fhondamotorc388f-hmsi8ece-prodb777-e813%2Fmedia%2FProject%2FHONDA2WI%2Fhonda2wheelersindia%2Fmotorcycle%2FPLP-images%2FActiva-125.png%3Fh%3D638%26iar%3D0%26w%3D1038&w=2580&q=75&dpl=dpl_8CrHyT8t9jrcyL2sBAy1LeN9ngMy",
        "TVS": "https://www.tvsmotor.com/-/media/Feature/Navbar/New-Product-images/19-09-25/Apache-RTR-200-4V.webp",
        "Jupiter": "https://www.tvsmotor.com/tvs-jupiter/-/media/TVS-Jupiter-110/SXC-Disc/Colors/360/sxcdisc/Dawn-Blue-Matte/image2.webp",
        "R15": "https://shop.yamaha-motor-india.com/cdn/shop/files/metallic_black_1200x.webp?v=1757049736"
    };

    const bikes = Array.from({ length: 30 }, (_, i) => {
        const brands = ["Royal Enfield", "KTM", "Honda", "TVS", "Jupiter", "R15"];
        const currentBrand = brands[i % brands.length];
        return {
            id: i + 1,
            brand: currentBrand,
            model: `${currentBrand} Model-${i + 1}`,
            price: (65000 + (i * 3000)), 
            img: brandImages[currentBrand],
            year: 2019 + (i % 5),
            km: (10000 + (i * 800))
        };
    });

    const handleBuyNow = (bike) => {
    
        const existingOrders = JSON.parse(localStorage.getItem('allOrders')) || [];
        
        const newOrder = {
            id: bike.id,
            brand: bike.brand,
            model: bike.model,
            price: bike.price,
            date: new Date().toLocaleDateString()
        };
        
        const updatedOrders = [...existingOrders, newOrder];
        
        
        localStorage.setItem('allOrders', JSON.stringify(updatedOrders));
        
    
        navigate(`/buy/${bike.id}`, { state: bike });
    };

    return (
        <div className="bike-container">
            <h2 className="section-title">All Certified Bikes (30)</h2>
            <div className="bike-grid">
                {bikes.map((bike) => (
                    <div key={bike.id} className="bike-card">
                        <div className="image-wrapper">
                            <img src={bike.img} alt={bike.model} />
                            <span className="tag">Verified</span>
                        </div>
                        <div className="bike-details">
                            <h3>{bike.brand}</h3>
                            <p className="model-name">{bike.model}</p>
                            <p className="info">{bike.year} • {bike.km} km</p>
                            <p className="price">₹{bike.price.toLocaleString('en-IN')}</p>
                            
                            <div className="btn-group">
                                <button className="view-btn" onClick={() => navigate(`/details/${bike.id}`, { state: bike })}>
                                    View Details
                                </button>
                                
                                <button className="buy-btn" onClick={() => handleBuyNow(bike)}>
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Buy;