import React, { useEffect } from 'react';



function Terms() {
    useEffect (() => {
        document.title = "Terms - Kotone"
    }, [])
    return (
        <div>
            <div className='dark:bg-gray-900 py-12 dark:text-gray-400 sm:py-14 text-gray-900'>
                <h1 className='text-7xl font-semibold text-center pb-8 dark:text-white'>ToS & Privacy</h1>
                <p className='text-center dark:text-gray-400 mb-16'>All you need to know about your privacy, and what or not you can do with Kotone.</p>
                <div className='mb-16'>
                    <h2 className='dark:text-white text-5xl font-semibold' id='tos'>Terms and conditions</h2>
                    <p>By using Kotone Discord bot, you agree to comply with and be bound by the following Terms of Service (ToS). Please read these terms carefully before using the bot.</p>
                    <ol>
                        <li className='my-8'>
                            <h3 className='text-3xl dark:text-white font-semibold'>Acceptance of Terms</h3>
                            <p className=''>By accessing or using Kotone bot, you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not agree with any part of these terms, you may not use the bot.</p>
                        </li>
                        <li className='my-8'>
                            <h3 className='text-3xl dark:text-white font-semibold'>Termination of service</h3>
                            <p className=''>Kotone reserves the right to terminate, suspend, or restrict access to the bot and its services at any time for any reason without prior notice, including but not limited to violations of these terms.</p>
                        </li>
                        <li className='my-8'>
                            <h3 className='text-3xl dark:text-white font-semibold'>Changes to Terms</h3>
                            <p className=''>We may update or modify these terms at any time. Users are responsible for regularly reviewing the terms. Continued use of the bot after changes constitutes acceptance of the modified terms.</p>
                        </li>
                    </ol>
                    <hr className='my-12 border-gray-700 rounded-lg' />
                </div>
                <div id='privacy'>
                    <h2 className='dark:text-white text-5xl font-semibold'>Privacy terms</h2>
                    <p>These Privacy Terms describe how we collect, use, and share personal information when you use the Discord bot Kotone. Please read this policy carefully before using the bot.</p>
                    <ol>
                    <li className='my-8'>
                            <h3 className='text-3xl dark:text-white font-semibold'>Information we collect</h3>
                            <p className=''>We collect certain information when you use specific commands in Kotone bot, such as the timestamp and the executed command. However, we do not store user IDs or usernames unless it is necessary for the command to function properly.</p>
                        </li>
                        <li className='my-8'>
                            <h3 className='text-3xl dark:text-white font-semibold'>Changes to this policy</h3>
                            <p className=''>We may update this policy periodically to reflect changes in our privacy practices. We recommend reviewing it regularly.</p>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default Terms;
