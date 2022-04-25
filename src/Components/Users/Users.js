import React, {useEffect, useState} from 'react';
import axios from "axios";
import UserItem from "../UserItem";


const Users = () => {
  const [users, setUsers] = useState([])


  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then((res) => setUsers(res.data))
  }, [])
  return (
    <div className="row">
      {
        users.map((item) => (
          <UserItem item = {item} key ={item.id} />
        ))
      }
    </div>
  );
};

export default Users;