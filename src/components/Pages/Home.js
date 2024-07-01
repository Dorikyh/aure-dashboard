import React, { useState, useEffect } from "react";
import FAQ from "../FAQ";
import { Heart, Database, Send, Image } from "react-feather";
import { useSpring, animated } from '@react-spring/web';
import SimpleSlider from "../SimpleSlider";

export const Home = () => {
  const [stats, setStats] = useState({
    timesUsed: 0,
    totalUsers: 0,
    totalSent: 0,
  });

  useEffect(() => {
    const fetchStats = () => {
      fetch("https://api.dorikyh.pw/bot/stats")
        .then(response => response.json())
        .then(data => {
          setStats({
            timesUsed: data.used_commands,
            totalUsers: data.users,
            totalSent: data.sent_media,
          });
        })
        .catch(error => console.error("Error fetching stats:", error));
    };

    fetchStats();
    const interval = setInterval(fetchStats, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const animatedTimesUsed = useSpring({ number: stats.timesUsed, from: { number: 0 } });
  const animatedTotalUsers = useSpring({ number: stats.totalUsers, from: { number: 0 } });
  const animatedTotalSent = useSpring({ number: stats.totalSent, from: { number: 0 } });

  return (
    <div className="dark:bg-gray-900 text-gray-900 bg-gray-200">
      <section className="bg-gradient-to-b from-slate-100 to-gray-200 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 text-white" id="about">
        <div className="lg:flex lg:h-screen items-center py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="bg-gradient-to-r dark:from-indigo-100 dark:to-indigo-500 from-indigo-400 to-indigo-700 bg-clip-text text-6xl font-extrabold text-transparent sm:text-7xl"
            >
              Kotone Discord Bot
            </h1>
            
            <p className="w-3/4 sm:w-5/6 mx-auto mt-4 temy-12xt-black dark:text-white text-black">
              Kotone has access to millions of images, gifs, videos and audios of all categories for everyone, also with AI generation, for free.
            </p>
            <div className="mx-20 pt-8 sm:flex sm:flex-wrap sm:justify-center gap-4">
              <div className="mb-4 sm:mb-0">
                <a
                  className="rounded-md bg-indigo-500 px-6 py-3 text-base font-medium text-white transition hover:bg-indigo-500 dark:hover:bg-indigo-400 block w-full sm:inline-block"
                  href="https://discord.com/oauth2/authorize?&client_id=889540062956634164&scope=bot&permissions=2147862592"
                >
                  Invite Kotone
                </a>
              </div>

              <div>
                <a
                  className="rounded-md bg-gray-100 px-6 py-3 text-base font-medium text-indigo-500 transition hover:text-indigo-800/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75 block w-full sm:inline-block"
                  href="https://discord.gg/appnkdReFk"
                >
                  Support Server
                </a>
              </div>
          </div>

          </div>
        </div>
      </section>

      <section className="dark:text-white text-black lg:mx-24 sm:mx-12 mx-8 mb-16" id="features">
      <div>
        <div>
          <h2 className="text-5xl font-extrabold sm:text-5xl text-center">What makes Kotone <span className="bg-gradient-to-br from-blue-100 to-indigo-500 bg-clip-text text-transparent text-gradient-to-r dark:from-indigo-100 dark:to-indigo-500 font-extrabold">special</span></h2>
        </div>
      </div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-center mx-auto max-w-3xl">
            Kotone has a huge database, with gifs, images, audios and videos in SFW and NSFW in hundreds of categories, an economy system for minigames and more.
          </p>

        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-2">
          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-gray-200 dark:bg-gray-800 p-4">
              <Database size={20} color="#FFFFFF" className="m-auto" strokeWidth={3}/>
            </span>
            

            <div>
              <h2 className="text-lg font-bold">Unlimited NSFW Database</h2>

              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                With the NSFW command you can access thousands of individual images in more than 30 different categories, and navigate between them randomly.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-gray-200 dark:bg-gray-800 p-4">
              <Image size={20} color="#FFFFFF" className="m-auto" strokeWidth={3}/>
            </span>

            <div>
              <h2 className="text-lg font-bold">Unique AI Generation</h2>

              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                You can generate with artificial intelligence absolutely anything you can imagine, without any kind of censorship at all.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
          <span className="shrink-0 rounded-lg bg-gray-200 dark:bg-gray-800 p-4">
              <Heart size={20} color="#FFFFFF" className="m-auto" strokeWidth={3}/>
            </span>

            <div>
              <h2 className="text-lg font-bold">Like content, save it for later</h2>

              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                When you are using commands with personalized responses, or images, you can Like them and access them later filering by category.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-gray-200 dark:bg-gray-800 p-4">
            <Send size={20} color="#FFFFFF" className="m-auto" strokeWidth={3}/>
            </span>

            <div>
              <h2 className="text-lg font-bold">The widest webhook system</h2>

              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                Kotone has an unique system of auto media posting, a customizable system with cooldowns, pings, categories and more!
              </p>
          </div>
        </div>
      </div>
      </section>

      <section className="mx-6 sm:mx-14 pb-12 sm:pt-12" id="stats">
        <div className="mx-auto max-w-screen-xl py-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-5xl text-gray-900 dark:text-white sm:text-6xl font-extrabold">
              Trusted by <span className="bg-gradient-to-br from-blue-100 to-indigo-500 bg-clip-text text-transparent text-gradient-to-r dark:from-indigo-100 dark:to-indigo-500 font-extrabold">@everyone</span>
            </h2>

            <p className="mt-4 text-gray-500 dark:text-gray-400">
              The following statistics updates in real-time every five seconds:
            </p>
          </div>
        </div>
        <div className="mt-0">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">

          <div className="flex flex-col rounded-xl bg-indigo-200 px-4 py-8 text-center dark:bg-gray-800">
            <dt className="order-last text-lg font-medium text-gray-500 dark:text-white/75">
              Times Used
            </dt>
            <dd id="times-used" className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-300 md:text-5xl">
              <animated.div>{animatedTimesUsed.number.to(n => Math.round(n).toLocaleString('en-US'))}</animated.div>
            </dd>
          </div>

          <div className="flex flex-col rounded-xl bg-indigo-200 px-4 py-8 text-center dark:bg-gray-800">
            <dt className="order-last text-lg font-medium text-gray-500 dark:text-white/75">
              Total media sent
            </dt>
            <dd id="total-servers" className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-300 md:text-5xl">
              <animated.div>{animatedTotalSent.number.to(n => Math.round(n).toLocaleString('en-US'))}</animated.div>
            </dd>
          </div>
          
          <div className="flex flex-col rounded-xl bg-indigo-200 px-4 py-8 text-center dark:bg-gray-800">
            <dt className="order-last text-lg font-medium text-gray-500 dark:text-white/75">
              Total Users
            </dt>
            <dd id="total-users" className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-300 md:text-5xl">
              <animated.div>{animatedTotalUsers.number.to(n => Math.round(n).toLocaleString('en-US'))}</animated.div>
            </dd>
          </div>

          </dl>
        </div>
      </section>
      <section className="sm:px-12 sm:py-10 py-4 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl text-gray-900 dark:text-white sm:text-5xl font-extrabold">
            Popular servers using Kotone
          </h2>
            
            <p className="mt-4 text-gray-500 dark:text-gray-400 sm:pb-8 pb-4">
              Here are some of the most common questions about Kotone.
            </p>
        </div>
        <SimpleSlider />
      </section>
      <section className="sm:px-12 sm:py-10 py-4 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl text-gray-900 dark:text-white sm:text-5xl font-extrabold">
            Frequently Asked Questions
          </h2>
            
            <p className="mt-4 text-gray-500 dark:text-gray-400 sm:pb-8 pb-4">
              Here are some of the most common questions about Kotone.
            </p>
        </div>
        <FAQ />
      </section>
    </div>
  );
};

export default Home; 