import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
        const token = localStorage.getItem('token');
      if (!token) {
        return;
      }
      const response = await axios.get('http://localhost:8080/user/get',{
        headers: {
            Authorization: `Bearer ${token}`,
          },
      });
      console.log(response.data);
      setUsers(response.data);
    } 
    catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div>
        <h1>User List</h1>
      <div style={{paddingLeft:'25%', paddingTop:'5%'}}>
      <table style={{border: '1px solid #ddd'}}>
        {/* <thead> */}
          <tr style={{border: '1px solid #ddd'}}>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        {/* </thead> */}
        {/* <tbody> */}
          {users.map(user => (
            // <tr key={user.id}>
            <tr>
              {/* <td>{user.id}</td> */}
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        {/* </tbody> */}
      </table>
    </div>
    </div>
  );
}