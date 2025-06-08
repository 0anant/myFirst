import React from 'react'

const UserList = () => {
    const users =[
        {id: 1, name: "Raj", age: 22},
        {id: 2,name: "Ramesh", age: 23},
        {id: 3, name: "Mukesh", age: 24},
    ];
  return (
    <div>
        {users.map((users) => (
            <ul key = {users.id}>
                <li>{users.name}</li>
                <li>{users.age}</li>
            </ul>
        ))};
    </div>
  );
};

export default UserList;