// NotFoundPage.js
import React from 'react';

function NotFoundPage() {
  return (
    <div>
        <div className='dark:bg-gray-900 p-12 sm:p-16'>
            <h1 className='text-7xl font-semibold text-center p-8 sm:p-20 dark:text-white'>Error 404</h1>
            <p className='text-center dark:text-gray-400'>Sorry, the page you are looking for does not exist.</p>
            <image src='https://http.cat/404' alt='Error 404'/>
        </div>
    </div>
  );
}

export default NotFoundPage;
