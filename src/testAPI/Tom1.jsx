import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import axios from 'axios';

function Tom1() {
  const [user, setUser] = useState({});

  const fetchUser = async () => {
    const response = await axios.get('https://randomuser.me/api/');
    const data = response.data;
    const [randomUser] = data.results;
    console.log(randomUser);
    setUser(randomUser);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className='Tom1'>
      <UserCard
        firstname={user.name ? user.name.first : ''}
        lastname={user.name ? user.name.last : ''}
        image={user.picture ? user.picture.large : ''}
        email={user.email}
        gender={user.gender}
        origin={user.nat}
      />
      <button onClick={fetchUser}>Utilisateur Aléatoire</button>
    </div>
  );
}

export default Tom1;
