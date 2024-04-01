import React from 'react';

const FAQ = () => {
    return (
<div className="space-y-4">
  <details className="group rounded-lg bg-gray-50 dark:bg-gray-800 p-6 [&_summary::-webkit-details-marker]:hidden" open>
    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
      <h2 className="text-2xl font-semibold dark:text-gray-200">Is Kotone a good bot for my server?</h2>

      <span className="relative size-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-400">
    Kotone is a tool that seeks to be suitable for all types of servers in the world. Kotone wants all users to be able to consume multimedia content through Discord in a personalized way, so you are responsible for how you personalize the bot for your community or friends.
    </p>
  </details>

  <details className="group rounded-lg bg-gray-50 p-6 dark:bg-gray-800 [&_summary::-webkit-details-marker]:hidden">
    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
      <h2 className="text-2xl font-semibold dark:text-gray-200">Why Kotone is not working well?</h2>

      <span className="relative size-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-400">
    Kotone is currently suffering from an overflow problem globally, since the number of servers is growing exponentially day after day, so it is not easy to guarantee that it works globally, since it is software in the development stage, but As a developer I work every day to improve this system! 
    </p>
  </details>
</div>
    );
};

export default FAQ;
