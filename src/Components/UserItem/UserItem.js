import React from 'react';

const UserItem = ({item}) => {
  return (
    <div className="col-4" key={item.id}>
      <ul>
        <li>Username: {item.username}</li>
        <li>Email: {item.email}</li>
      </ul>
    </div>
  );
};

export default UserItem;