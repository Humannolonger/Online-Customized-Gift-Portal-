import React, { Component } from 'react'
import '../assets/css/adminprofile.css'


function Editprofile() {
    return ( <div className='adminprofile-all'>
        <div className='adminprofile-image'>
            <h3>Profile</h3>
            <div className='admin-image'>   
            </div><br/>
            <button style={{backgroundColor:'whitesmoke',border:'none',color:'black'}} className='admin-button'>User
            </button>
        </div>
        <div className='adminprofile-details'>
            <div className='admin-details'>
                    <h2>Edit Details</h2>
                    <label>First Name</label><br/>
                    <input type='text' value='Ram'/><br/>
                    <label>Last Name</label><br/>
                    <input type='text' value='K'/><br/>
                    <label>Email Address</label><br/>
                    <input type='text'value='ram@gmail.com'/><br/>
                    <h3>Change Password</h3>
                    <label>Password</label><br/>
                    <input type='password' value='123'/><br/>
                    <label> Confirm Password</label><br/>
                    <input type='password'value='123'/><br/><br/>
                    <button style={{backgroundColor:'whitesmoke',border:'none',color:'black'}}>Save</button>
            </div>

        </div>
    </div> );
}

export default Editprofile;