
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">User List</h1>
      {listOfUsers.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listOfUsers.map(user => (
            <li key={user.id} className="bg-white shadow-md rounded-lg p-4 border">
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-700"><strong>Email:</strong> {user.email}</p>
              <p className="text-gray-700"><strong>Username:</strong> {user.username}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">Loading users...</p>
      )}
    </div>
  );
};

export default UserList;
