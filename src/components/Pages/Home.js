import React, { useState, useEffect } from "react";



export const Home = () => {
  const [statusData, setStatusData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.kotone.tech/status");
        if (response.ok) {
          const data = await response.json();
          setStatusData(data);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div class="dark:bg-gray-900 text-gray-900">
      <section class="bg-gradient-to-b from-slate-100 to-gray-200 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 text-white" id="about">
      <div class="mx-auto px-2 py-16 lg:flex lg:h-screen items-center">
        <div class="mx-auto max-w-3xl text-center">
          <h1
            className="bg-gradient-to-r dark:from-indigo-100 dark:to-indigo-500 from-indigo-400 to-indigo-700 bg-clip-text text-6xl font-extrabold text-transparent sm:text-7xl"
          >
            Kotone Discord Bot
          </h1>
          <p class="w-3/4 sm:w-5/6 mx-auto mt-4 temy-12xt-black dark:text-white text-black">
            Kotone has access to millions of images, gifs, videos and audios of all categories for everyone, also with AI generation, for free.
          </p>
          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <a
              class="block rounded-md bg-indigo-500 px-6 py-3 text-base font-medium text-white transition hover:bg-indigo-500 dark:hover:bg-indigo-400"
              href="https://discord.com/oauth2/authorize?&client_id=889540062956634164&scope=bot&permissions=2147862592"
            >
              Invite Kotone
            </a>

            <a
              class="rounded-md bg-gray-100 px-6 py-3 text-base font-medium text-indigo-500 transition hover:text-indigo-800/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75 sm:block"
              href="https://discord.gg/appnkdReFk"
            >
              Support Server
            </a>
          </div>
        </div>
      </div>
      </section>

      <section class="dark:text-white text-black lg:mx-24 sm:mx-12 mx-8 mb-16" id="features">
      <div>
        <div>
          <h2 class="text-5xl font-extrabold sm:text-5xl text-center">What makes Kotone <span class="bg-gradient-to-br from-blue-100 to-indigo-500 bg-clip-text text-transparent text-gradient-to-r dark:from-indigo-100 dark:to-indigo-500 font-extrabold">special</span></h2>
        </div>
      </div>
          <p class="mt-4 text-gray-600 dark:text-gray-300 text-center mx-auto max-w-3xl">
            Kotone has a huge database, with gifs, images, audios and videos in SFW and NSFW in hundreds of categories, an economy system for minigames and more.
          </p>

        <div class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-2">
          <div class="flex items-start gap-4">
            <span class="shrink-0 rounded-lg bg-gray-200 dark:bg-gray-800 p-4">
                <i class="fa-solid fa-image"></i>
            </span>
            

            <div>
              <h2 class="text-lg font-bold">Unlimited NSFW Database</h2>

              <p class="mt-1 text-sm text-gray-600 dark:text-gray-300">
                With the NSFW command you can access thousands of individual images in more than 30 different categories, and navigate between them randomly.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <span class="shrink-0 rounded-lg bg-gray-200 dark:bg-gray-800 p-4">
              <i class="fa-solid fa-wand-magic-sparkles"></i>
            </span>

            <div>
              <h2 class="text-lg font-bold">Unique AI Generation</h2>

              <p class="mt-1 text-sm text-gray-600 dark:text-gray-300">
                You can generate with artificial intelligence absolutely anything you can imagine, without any kind of censorship at all.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <span class="shrink-0 rounded-lg bg-gray-200 dark:bg-gray-800 p-4">
              <i class="fa-solid fa-heart"></i>
            </span>

            <div>
              <h2 class="text-lg font-bold">Like content, save it for later</h2>

              <p class="mt-1 text-sm text-gray-600 dark:text-gray-300">
                When you are using commands with personalized responses, or images, you can Like them and access them later filering by category.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <span class="shrink-0 rounded-lg bg-gray-200 dark:bg-gray-800 p-4">
              <i class="fa-solid fa-money-bill-wave"></i>
            </span>

            <div>
              <h2 class="text-lg font-bold">The widest webhook system</h2>

              <p class="mt-1 text-sm text-gray-600 dark:text-gray-300">
                Kotone has an unique system of auto media posting, a customizable system with cooldowns, pings, categories and more!
              </p>
          </div>
        </div>
      </div>
      </section>

      <section class="mx-6 sm:mx-14 pb-16" id="stats">
        <div class="mx-auto max-w-screen-xl py-12">
          <div class="mx-auto max-w-3xl text-center">
            <h2 class="text-3xl text-gray-900 dark:text-white sm:text-5xl font-extrabold">
              Trusted by thousands of users and communities
            </h2>

            <p class="mt-4 text-gray-500 dark:text-gray-400">
              With more than 3 months of continuous development we have the following statistics:
            </p>
          </div>
        </div>
        <div class="mt-8 sm:mt-12">
          <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div class="flex flex-col rounded-lg bg-indigo-100 px-4 py-8 text-center dark:bg-gray-800">
              <dt class="order-last text-lg font-medium text-gray-500 dark:text-white/75">
                Times Used
              </dt>
              <dd id="times-used" class="text-4xl font-extrabold text-indigo-600 dark:text-indigo-300 md:text-5xl">{isLoading ? 'Loading' : (statusData ? statusData.used_commands.toLocaleString() : 'Error')}</dd>
            </div>

            <div class="flex flex-col rounded-lg bg-indigo-100 px-4 py-8 text-center dark:bg-gray-800">
              <dt class="order-last text-lg font-medium text-gray-500 dark:text-white/75">
                Total users
              </dt>
              <dd id="total-users" class="text-4xl font-extrabold text-indigo-600 dark:text-indigo-300 md:text-5xl">{isLoading ? 'Loading' : (statusData ? statusData.users.toLocaleString() : 'Error')}</dd>
            </div>

            <div class="flex flex-col rounded-lg bg-indigo-100 px-4 py-8 text-center dark:bg-gray-800">
              <dt class="order-last text-lg font-medium text-gray-500 dark:text-white/75">
                Total Servers
              </dt>
              <dd id="total-servers" class="text-4xl font-extrabold text-indigo-600 dark:text-indigo-300 md:text-5xl">{isLoading ? 'Loading' : (statusData ? statusData.servers.toLocaleString() : 'Error')}</dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
};
