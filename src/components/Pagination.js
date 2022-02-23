import React from "react";

const Pagination = ({ total, current, perPage, paginate }) => {
  const pageNumbers = [];

  const totalPages = Math.ceil(total / perPage);
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const enabledClassNames = "px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-900 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200";
  const disabledClassNames = "px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-not-allowed dark:bg-gray-900 dark:text-gray-600";

  const prevEnabled = () => {
    return current !== 1;
  }

  const nextEnabled = () => {
    return current !== totalPages;
  }

  return (
    <div className="flex">
      <a
        href="#"
        onClick={(event) => prevEnabled() ? paginate(current - 1) : event.preventDefault()}
        className={prevEnabled() ? enabledClassNames : disabledClassNames}
      >
        <div className="flex items-center -mx-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mx-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>

          <span className="mx-1">Previous</span>
        </div>
      </a>

      {pageNumbers.map((number) => (
        <a
          href="#"
          onClick={() => paginate(number)}
          className={
            current === number
              ? "hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-gray-100 rounded-md sm:inline dark:bg-gray-900 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
              : "hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md sm:inline dark:bg-gray-900 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
          }
        >
          {number}
        </a>
      ))}

      <a
        href="#"
        onClick={(event) => nextEnabled() ? paginate(current + 1) : event.preventDefault()}
        className={nextEnabled() ? enabledClassNames : disabledClassNames}
      >
        <div className="flex items-center -mx-1">
          <span className="mx-1">Next</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mx-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </a>
    </div>
  );
};

export default Pagination;