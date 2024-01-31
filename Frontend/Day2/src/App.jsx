// App.jsx

import React, { Profiler, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ResponsiveAppBar from './components/Navbar';
import Signin from './pages/Signin';
import Login from './pages/Login';
import Products from './pages/Products';
import Users from './pages/Users';
import Gift from './components/gift';
import Dashboard from './components/Dashboard';
import CartPage from './pages/CartPage';
import Admindashboard from './components/Admindashboard';
import Sitesettings from './pages/Sitesettings';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Editprofile from './components/Editprofile';
import Userprofile from './pages/Userprofile';
import Userorders from './pages/Userorders';
import Contactus from './pages/Contactus';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<><ResponsiveAppBar /><Home /></>} />
        <Route path="/about" element={<><ResponsiveAppBar /><About /></>} />
        <Route path="/signin" element={<><ResponsiveAppBar /><Signin /></>} />
        <Route path="/login" element={<><ResponsiveAppBar /><Login /></>} />
        <Route path="/Dashboard/gift" element={<><Dashboard rightContent={<Gift />}/></>}/>

        <Route path="/dashboard"
          element={
            <React.Fragment>
              <Dashboard />
              
              <Users />
            </React.Fragment>
          }
        />
        
        <Route
          path="/products"
          element={<><ResponsiveAppBar /><Products addToCart={addToCart} /></>}
        />
        <Route
          path="/Dashboard/users"
          element={<><Dashboard rightContent={<Users />}/></>}
        />
        <Route
          path="/Dashboard/admindashboard"
          element={<><Dashboard rightContent={<Admindashboard />}/></>}
        />
        <Route
          path="/Dashboard/users"
          element={<><Dashboard rightContent={<Users />}/></>}
        />
        <Route
          path="/Dashboard/sitesettings"
          element={<><Dashboard rightContent={<Sitesettings />}/></>}
        />
        <Route
          path="/Dashboard/orders"
          element={<><Dashboard rightContent={<Orders />}/></>}
        />
        <Route
          path="/Dashboard/profile"
          element={<><Dashboard rightContent={<Profile />}/></>}
        />
        <Route
          path="/Dashboard/register"
          element={<><Dashboard rightContent={<Register />}/></>}
        />
        
        <Route
          path="/cart"
          element={<><ResponsiveAppBar /><CartPage cart={cart} setCart={setCart} /></>}
        />
        <Route path='/userprofile' element={<Userprofile />} />
        <Route path="/Userprofile/editprofile" element={<><ResponsiveAppBar /><Userprofile rightData={<Editprofile/>}/></>} />
        <Route path="/profile/Userorders" element={<><ResponsiveAppBar /><Userprofile rightData={<Userorders/>}/></>} />
        <Route path="/contactus" element={<><ResponsiveAppBar /><Contactus /></>} />
        
      </Routes>
    </Router>
  );
}

export default App;
