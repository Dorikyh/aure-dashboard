import React from 'react';

const Footer = () => {
    return (

        <footer class="bg-gray-300 dark:bg-gray-800">
        <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="flex justify-center text-teal-600 dark:text-teal-300">
          
          </div>
    
          <p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400">
            Developed by <a href="https://dorikyh.xyz">Dorikyh</a> using ReactJS.
          </p>
    
          <ul class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 font-bold"
                href="#about"
              >
                About
              </a>
            </li>
    
            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 font-bold"
                href="#features"
              >
                Terms
              </a>
            </li>
    
            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 font-bold"
                href="#stats"
              >
                Stats
              </a>
            </li>
    
          </ul>
        </div>
      </footer>
    );
};

export default Footer;
