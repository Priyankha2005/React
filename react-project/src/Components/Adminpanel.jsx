import React, { useState, useEffect } from 'react';
import './Bike.css';

const Adminpanel = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [orders, setOrders] = useState([]);  


    const [staffList, setStaffList] = useState([
     { id: 1, name: "Arun", role: "Admin", email: "arun@bike.com", phone: "9876543210" },
        { id: 2, name: "Vijay", role: "Cashier", email: "vijay@bike.com", phone: "9876543211" }
    ]);


    const [showStaffForm, setShowStaffForm] = useState(false);
    const [newStaff, setNewStaff] = useState({ name: '', email: '', phone: '', role: 'Staff' });

    useEffect(() => {
        const savedOrders = JSON.parse(localStorage.getItem('allOrders')) || [];
        setOrders(savedOrders);
    }, []);


    const adminCount = staffList.filter(s => s.role === 'Admin').length;
    const cashierCount = staffList.filter(s => s.role === 'Cashier').length;
    const otherStaffCount = staffList.filter(s => s.role === 'Staff').length;

    const handleAddStaff = (e) => {
        e.preventDefault();
        if (newStaff.name && newStaff.email) {
            setStaffList([...staffList, { id: staffList.length + 1, ...newStaff }]);
            setNewStaff({ name: '', email: '', phone: '', role: 'Staff' });
            setShowStaffForm(false);
        }
    };

    

    useEffect(() => {
    
        const savedOrders = JSON.parse(localStorage.getItem('allOrders')) || [];
        setOrders(savedOrders);
    }, []);

    
    const TOTAL_STOCK = 30;
    const brands = ["Royal Enfield", "KTM", "Honda", "TVS", "Jupiter", "R15"];
    
    const allBikes = Array.from({ length: TOTAL_STOCK }, (_, i) => ({
        brand: brands[i % brands.length]
    }));


    const totalOrdered = orders.length;
    const availableBikes = TOTAL_STOCK - totalOrdered;
    const totalRevenue = orders.reduce((sum, o) => {
        const p = typeof o.price === 'string' ? parseInt(o.price.replace(/[^0-9]/g, '')) : o.price;
        return sum + p;
    }, 0);

    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard':
                return (
                    <div className="admin-stats">
                        <div className="stat-card"><h3>Total Orders</h3><p>{totalOrdered}</p></div>
                        <div className="stat-card"><h3>Total Revenue</h3><p>₹{totalRevenue.toLocaleString()}</p></div>
                        <div className="stat-card">
                            <h3>Recent Orders List</h3>
                            <div className="recent-scroll">
                                {orders.length > 0 ? orders.slice().reverse().map((o, i) => (
                                    <p key={i} style={{borderBottom:'1px solid #eee', padding:'5px'}}>
                                        {o.customerName} - {o.brand} (₹{o.price})
                                    </p>
                                )) : <p>No orders yet</p>}
                                </div>
                            </div>
                        </div>
                    );

                case 'bikes':
                    return (
                        <div className="bike-inventory">
                            <h3>Brand Wise Booking Status</h3>
                            {brands.map(brand => {
                                const brandTotal = allBikes.filter(b => b.brand === brand).length;
                                const brandOrdered = orders.filter(o => o.brand === brand).length;
                                return (
                                    <div key={brand} className="bike-item-admin">
                                        <strong>{brand}</strong>
                                        <span>Stock: {brandTotal} | Ordered: {brandOrdered} | Left: {brandTotal - brandOrdered}</span>
                                    </div>
                                );
                            })}
                        </div>
                    );

            case 'orders':
                return (
                    <div className="order-details">
                        <div className="summary-box">
                            <p>Total Available Bikes: <b>{availableBikes}</b></p>
                            <p>Total Booked: <b>{totalOrdered}</b></p>
                        </div>
                        <table>
                            <thead>
                                <tr><th>Order ID</th><th>Bike</th><th>Price</th></tr>
                            </thead>
                            <tbody>
                                {orders.map((o, i) => (
                                    <tr key={i}>
                                        <td>{o.orderId}#</td>
                                        <td>{o.brand} {o.model}</td>
                                        <td>₹{o.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );




                    case 'staff':
                return (
                    <div className="staff-section">
                        <div className="staff-header">
                            <div className="staff-counts">
                                <span>Admins: {adminCount}</span> | <span>Cashiers: {cashierCount}</span> | <span>Staffs: {otherStaffCount}</span>
                            </div>
                            <button className="add-btn" onClick={() => setShowStaffForm(!showStaffForm)}>+</button>
                        </div>

                        {showStaffForm && (
                            <form className="staff-form" onSubmit={handleAddStaff}>
                                <input type="text" placeholder="Name" required onChange={e => setNewStaff({...newStaff, name: e.target.value})} />
                                <input type="email" placeholder="Email" required onChange={e => setNewStaff({...newStaff, email: e.target.value})} />
                                <input type="text" placeholder="Phone" required onChange={e => setNewStaff({...newStaff, phone: e.target.value})} />
                                <select onChange={e => setNewStaff({...newStaff, role: e.target.value})}>
                                    <option value="Staff">Staff</option>
                                    <option value="Cashier">Cashier</option>
                                    <option value="Admin">Admin</option>
                                </select>
                                <button type="submit">Submit</button>
                            </form>
                        )}

                        <table>
                            <thead>
                                <tr><th>S.No</th><th>Name</th><th>Role</th><th>Email</th><th>Phone</th></tr>
                            </thead>
                            <tbody>
                                {staffList.map((s, i) => (
                                    <tr key={i}><td>{i + 1}</td><td>{s.name}</td><td>{s.role}</td><td>{s.email}</td><td>{s.phone}</td></tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );


 case 'reports':
                return (
                    <div className="report-section">
                        <h3>Sales Report</h3>
                        <table>
                            <thead>
                                <tr><th>S.No</th><th>Bike</th><th>Price</th><th>Action</th></tr>
                            </thead>
                            <tbody>
                                {orders.map((o, i) => (
                                    <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{o.brand}</td>
                                        <td>₹{o.price}</td>
                                        <td><button onClick={() => window.print()}>Print Bill</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            default: return null;
        }
    };


    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <h2>Admin Panel</h2>
                <ul>
                    <li onClick={() => setActiveTab('dashboard')}>Dashboard</li>
                    <li onClick={() => setActiveTab('bikes')}>Inventory (Bikes)</li>
                    <li onClick={() => setActiveTab('orders')}>Orders Status</li>
                   <li onClick={() => setActiveTab('staff')}>Staff</li>
                    

                    <li onClick={() => setActiveTab('reports')}>Reports</li>
                </ul>
            </div>
            <div className="admin-main-content">{renderContent()}</div>
        </div>
    );
};

export default Adminpanel;


