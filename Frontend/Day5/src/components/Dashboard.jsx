import React, { useState } from 'react';
import '../assets/css/Dashboard.css';
import { Link, Routes, Route } from 'react-router-dom';

const Dashboard = ({rightContent}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Sidebar</h2>
        <ul>
          <li onClick={() => handleOptionClick('Orders')}>
            <Link style={{textDecoration:'none'}} to="/Dashboard/orders">Orders</Link>
          </li>
          <li onClick={() => handleOptionClick('Products')}>
            <Link style={{textDecoration:'none'}} to="/Dashboard/gift">Products</Link>
          </li>
          <li onClick={() => handleOptionClick('Users')}>
            <Link style={{textDecoration:'none'}} to="/Dashboard/users">Users</Link>
          </li>
          <li onClick={() => handleOptionClick('AdminDashboard')}>
            <Link style={{textDecoration:'none'}} to="/Dashboard/admindashboard">Admin Dashboard</Link>
          </li>
          <li onClick={() => handleOptionClick('Sitesettings')}>
            <Link style={{textDecoration:'none'}} to="/Dashboard/sitesettings">Site Settings</Link>
          </li>
          <li onClick={() => handleOptionClick('Profile')}>
            <Link style={{textDecoration:'none'}} to="/Dashboard/profile">Profile</Link>
          </li>
          <li onClick={() => handleOptionClick('Logout')}>
            <Link style={{textDecoration:'none'}} to="/">Logout</Link>
          </li>
          {/* Add more sidebar links as needed */}
        </ul>
      </div>
      <div className='main-right'>
        {rightContent}
      </div>
      {/* <div className="main-content">
        <h1>Admin Dashboard</h1>
        <Routes>
          <Route
            path="/admin/orders"
            element={<p>Orders content goes here.</p>} // Replace with your Orders component
          />
          <Route
            path="/admin/products"
            element={<p>Products content goes here.</p>} // Replace with your Products component
          />
          <Route
            path="/admin/users"
            element={<p>User details are here.</p>} // Replace with your Products component
          />
          {/* Add more routes for other functionalities */}
         
    </div>
  );
};

export default Dashboard;