'use client';

import React, { useState } from 'react';

interface User {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  isEnabled: boolean;
}

const USERS_Table = () => {
  const [users, setUsers] = useState<User[]>([
    {
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "123-456-7890",
      isEnabled: true,
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      phoneNumber: "987-654-3210",
      isEnabled: false,
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      phoneNumber: "987-654-3210",
      isEnabled: false,
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      phoneNumber: "987-654-3210",
      isEnabled: false,
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      phoneNumber: "987-654-3210",
      isEnabled: false,
    }
  ]);

  const toggleUserPermission = (index: number) => {
    const updatedUsers = [...users];
    updatedUsers[index].isEnabled = !updatedUsers[index].isEnabled;
    setUsers(updatedUsers);
  };
  return (
    <table id="user-table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
          <th>Permission</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.phoneNumber}</td>
            <td>
              <button
                className={`button-29 ${
                  user.isEnabled ? "enabled" : "disabled"
                }`}
                onClick={() => toggleUserPermission(index)}
              >
                {user.isEnabled ? "Disable" : "Enable"}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default USERS_Table;

