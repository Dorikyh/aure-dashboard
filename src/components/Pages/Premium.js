import React from 'react';

function Premium() {
    return (
        <div>
            <div className='dark:bg-gray-900 px-8 py-12 dark:text-gray-400 sm:px-60 sm:py-14 text-gray-900'>
                <h1 className='text-6xl sm:text-7xl font-semibold text-center pb-8 dark:text-white'>Kotone Premium</h1>
                <p className='text-center dark:text-gray-400 mb-16'>The best unique features between all Discord bots, in the cheapest way.</p>

                <div id='plans'>
                    <h2 className='dark:text-white text-5xl font-semibold mb-2'>Kotone Plans</h2>
                    <p>This is the best way to contribute the develop of Kotone Bot, and help to developers keep offerting free services for everyone!</p>
                    <ol className='flex flex-col sm:flex-row'>
                        <li className='my-8 bg-gradient-to-b from-gray-800 to-gray-700 mr-0 sm:mr-12 p-8 rounded-xl flex-1'>
                            <h3 className='text-5xl dark:text-white font-semibold mb-2'>Free</h3>
                            <p className=''>The free version of Kotone.</p>
                            <hr className='my-2 border-gray-700 rounded-lg' />
                            <ul className='mb-8'>
                                <li>- Access to all commands</li>
                                <li>- Access to all images, gifs, videos and audios</li>
                                <li>- Acces Kotone everywhere.</li>
                            </ul>
                            <a href='https://google.com' className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mt-4'>You own this</a>
                            
                        </li>
                        <li className='my-8 bg-gradient-to-b from-indigo-900 to-indigo-800 p-8 rounded-xl flex-1'>
                            <h3 className='text-5xl dark:text-white font-semibold mb-2'>Premium</h3>
                            <p className=''>The premium way to get Kotone.</p>
                            <hr className='my-2 border-gray-600 rounded-lg' />
                            <ul className='mb-8'>
                                <li>- All cooldowns disabled.</li>
                                <li>- The fastest auto-posting system.</li>
                                <li>- More auto-post settings.</li>
                            </ul>
                            <a href='https://google.com' className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-4'>Buy Now</a>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default Premium;
