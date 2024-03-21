// Profile.js
import React, { useState, useEffect } from 'react';
import SideBar from "../SideBar.js";

function Profile() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      fetch('https://api.kotone.tech/user/info', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${jwtToken}`
        }
      })
      .then(response => response.json())
      .then(data => setUserInfo(data))
      .catch(error => console.error('Error fetching user info:', error));
    }
  }, []);

  return (
    <div className="dark:bg-gray-900 flex">
      <SideBar />
      <main className='p-12'>
        {userInfo ? (
          <div className='dark:text-gray-300'>
            <h2 className='font-bold text-5xl dark:text-white mb-2'>Welcome, {userInfo.username}!</h2>
            <p className='mb-8'>These are your global stats with Kotone.</p>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-4 font-bold text-gray-400'>
            <div className='bg-gray-200 dark:bg-gray-700 p-4 rounded-lg'>
                <h3 className='text-3xl dark:text-white'>Credits</h3>
                <p className='text-2xl'>{userInfo.credits}</p>
              </div>
              <div className='bg-gray-200 dark:bg-gray-700 p-4 rounded-lg'>
                <h3 className='text-3xl dark:text-white'>Orbs</h3>
                <p className='text-2xl'>{userInfo.orbs}</p>
              </div>
              <div className='bg-gray-200 dark:bg-gray-700 p-4 rounded-lg'>
                <h3 className='text-3xl dark:text-white'>Experience</h3>
                <p className='text-2xl'>{userInfo.xp}</p>
              </div>
              <div className='bg-gray-200 dark:bg-gray-700 p-4 rounded-lg'>
                <h3 className='text-3xl dark:text-white'>Premium</h3>
                <p className='text-2xl'>{userInfo.premium}</p>
              </div>
            </div>
            <h2 className='dark:text-white text-4xl font-bold mt-8'>Join the Support Server</h2>
            <p>If you want to know more about Kotone, give feedback or give you are very welcome to the Support Server!</p>

          </div>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </div>
  );
}

export default Profile;
