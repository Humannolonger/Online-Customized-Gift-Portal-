import React, { Component } from 'react'
import '../assets/css/Userprofile.css'
import { Link } from 'react-router-dom';
function Userprofile({rightData}) {
    return ( <div className='profile-entire'>
                <div className='profile-left'>
                    <Link style={{textDecoration:'none'}} to='/Userprofile/Editprofile'><p>Edit Profile</p></Link>
                    <Link style={{textDecoration:'none'}} to='/Profile/Userorders'><p>Your Orders</p></Link>
                </div>
                <div className='profile-right'>
                    {rightData}
                </div>
            </div> );
}

export default Userprofile;