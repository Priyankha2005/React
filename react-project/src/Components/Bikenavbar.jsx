import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Bike.css';
import Sidebar from './Account';

const Navbar = () => {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            <nav className="navbar">
                <div className="logo" onClick={() => navigate('/')}>
                    <h3>MOTOR BIKES</h3>
                </div>
                
                <div className="location" onClick={() => navigate('/select-city')}>
                    Tiruppur <span>▼</span>
                </div>

                <div className="search-box" onClick={() => navigate('/search')}>
                    
                    <input type="text" placeholder="Search by location..." readOnly />
                </div>
                <div className="menu-links">
                    <button onClick={() => navigate('/buy')}>🚲Buy</button>
                    <button onClick={() => navigate('/sell')}>🔑 Sell</button>
                    <button onClick={() => navigate('/service')}>🛠 Service</button>
                    <button onClick={() => setIsSidebarOpen(true)}> 👤Account</button>
                </div>
            </nav>
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        </>
    );
};
export default Navbar;
