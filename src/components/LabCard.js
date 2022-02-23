import React from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LabCard = ({ lab = {}, loading = false }) => {
  let classNames =
    "flex-1 max-w-sm mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-800" + (loading ? "" : "overflow-hidden");

  return (
    <div className={classNames + (loading ? " w-3/4" : "")}>
      {!loading ? (
        <img
          className="object-cover object-center w-full h-56"
          src={"https://picsum.photos/300/300?nocache=" + Math.random()}
          alt="avatar"
        />
      ) : (
        <Skeleton className="object-cover object-center w-full h-56" />
      )}

      {!loading ? (
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-2 px-1 py-3 bg-gray-900">
          <p className="mx-1 col-start-1 col-end-1 text-lg font-semibold text-white">
            #{lab.id}
          </p>
          <p className="col-start-2 col-end-3 mx-3 text-lg font-semibold text-white text-right">
            {lab.type}
          </p>
        </div>
      ) : (
        <Skeleton />
      )}

      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          {!loading ? lab.name : <Skeleton />}
        </h1>

        <p className="py-2 text-gray-700 dark:text-gray-400 grow h-full">
          {!loading ? lab.description : <Skeleton />}
        </p>

        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="px-2 text-sm">
            {!loading ? lab.duration + " mins." : <Skeleton width={50} />} 
          </p>
        </div>

        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>

          <p className="px-2 text-sm">
            {!loading ? lab.rating : <Skeleton width={50} />}
          </p>
        </div>

        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
            />
          </svg>

          <p className="px-2 text-sm">
            {!loading ? (
              lab.tags.map((tag, index) => (
                <span>
                  {tag}
                  {index < lab.tags.length - 1 ? ", " : ""}
                </span>
              ))
            ) : (
              <Skeleton width={100} />
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LabCard;
