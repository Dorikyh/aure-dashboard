import React from 'react';

const Footer = () => {
    return (



<footer class="bg-white shadow dark:bg-gray-800 ">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://kotone.tech/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="https://kotone.tech/kotone.png" class="h-8" alt="Kotone Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Kotone</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="/" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="/terms" class="hover:underline me-4 md:me-6">Terms</a>
                </li>
                <li>
                    <a href="/status" class="hover:underline me-4 md:me-6">Status</a>
                </li>
                <li>
                    <a href="/dashboard" class="hover:underline">Dashboard</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://kotone.tech/" class="hover:underline">Dorikyh</a>. All Rights Reserved.</span>
    </div>
</footer>


    );
};

export default Footer;
