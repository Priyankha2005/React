import { useNavigate } from 'react-router-dom'; 
import './Bike.css';

const Sidebar = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    return (
        <>
            <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={onClose}></div>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <h2 className="brand-logo">Drive<span className="red-text">X</span></h2>
                    <button className="close-btn" onClick={onClose}>&times;</button>
                </div>

            
                <div className="login-card" onClick={() => { navigate('/admin'); onClose(); }}>
                    <div className="user-avatar">
                        <span className="avatar-icon">👤</span>
                    </div>
                    <div className="login-info">
                        <h3>Login</h3>
                        <p>Access Your Account</p>
                    </div>
                    <span className="arrow-right"></span>
                </div>

                <div className="grid-container">
                    <div className="grid-box">
                        <span className="icon red-icon">🗓️</span>
                        <p>Booking</p>
                    </div>
                    <div className="grid-box">
                        <span className="icon blue-icon">📄</span>
                        <p>Sell Requests</p>
                    </div>
                    <div className="grid-box">
                        <span className="icon pink-icon">❤️</span>
                        <p>Wishlist</p>
                    </div>
                    <div className="grid-box">
                        <span className="icon teal-icon">🎧</span>
                        <p>Help & Support</p>
                    </div>
                </div>

                <div className="service-list">
                    <div className="service-item buy">
                        <div className="service-icon red-bg">🏍️</div>
                        <div className="service-text">
                            <h4>Buy</h4>
                            <p>Quality two-wheelers</p>
                        </div>
                    </div>
                    <div className="service-item sell">
                        <div className="service-icon orange-bg">🔑</div>
                        <div className="service-text">
                            <h4>Sell</h4>
                            <p>Get instant estimates</p>
                        </div>
                    </div>
                    <div className="service-item service">
                        <div className="service-icon light-orange-bg">🔧</div>
                        <div className="service-text">
                            <h4>Service</h4>
                            <p>Take your bike for a spa</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;