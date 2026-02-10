import { useNavigate } from 'react-router-dom';
import './Bike.css'; 

const Footerbike = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer-container">
      <div className="footer-main">
        <div className="footer-brand">
          <h2 className="footer-logo">Motor<span>  Bikes</span></h2>
          <p className="brand-desc">
            We're committed to creating a technology-driven trustable ecosystem 
            to sell two-wheelers and buy top-quality refurbished two-wheelers 
            while making the process quick, easy and hassle-free.
          </p>
          <div className="contact-number">
            <span>📞</span> +917666376661
          </div>
          <div className="social-icons">
            <span onClick={() => window.open('https://facebook.com')}>f</span>
            <span onClick={() => window.open('https://linkedin.com')}>in</span>
            <span onClick={() => window.open('https://youtube.com')}>y</span>
            <span onClick={() => window.open('https://instagram.com')}>ig</span>
            <span onClick={() => window.open('https://twitter.com')}>t</span>
          </div>
          <p className="corporate-affairs">Corporate Affairs ↗</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li onClick={() => navigate('/buy')}>Buy</li>
            <li onClick={() => navigate('/sell')}>Sell</li>
            <li onClick={() => navigate('/service')}>Service</li>
            <li>Bike Resale Value</li>
            <li>About Us</li>
            <li>Blogs</li>
            <li>Media</li>
          </ul>
        </div>

        <div className="footer-support">
          <h4 style={{visibility: 'hidden'}}>Support</h4>
          <ul>
            <li>Motor bike Finance</li>
            <li>Motor bike EMI Calculator</li>
            <li>Become a Dealer</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-address">
          <div className="address-item">
            <h4>Registered Address</h4>
            <p>Motor Bikes Pvt. Ltd.</p>
            <p>CIN: U63040TZ2020PTC033680</p>
            <p>484, Kamaraj Road, Uppilipalayam, Coimbatore 641 015</p>
            <p className="email">Email: priyazmotor@gmail.com</p>
          </div>
          <div className="address-item">
            <h4>Corporate Address</h4>
            <p>Motor Bikes Pvt. Ltd.</p>
            <p>TWA - Sindhu Building, Ground Floor</p>
            <p>BBMP #06, 7th Main, 80 Feet Road, 3rd Block, Koramangala, Bengaluru - 560034</p>
            <p className="email">Email: priyazmotor@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>©2026 Motor Bikes Pvt Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};
          
export default Footerbike;