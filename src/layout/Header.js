import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";

import { personalInformationState } from "../state/PersonalInformationState";

const Header = () => {
  const [personalInfo, setPersonalInfo] = useRecoilState(
    personalInformationState
  );

  return (
    <nav className="bg-white shadow dark:bg-gray-800 sticky top-0">
      <div className="px-4 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <div>
            <a
              className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
              href="/"
            >
              DevSecOps Academy
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Menu */}
        <div className="items-center md:flex">
          <div className="flex flex-col md:flex-row md:mx-6">
            <Link
              className="my-1 text-m font-medium text-zinc-900 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              to="/"
            >
              Labs
            </Link>
            <Link
              className="my-1 text-m font-medium text-zinc-900 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              to="/personal-information"
            >
              Personal Information
            </Link>
          </div>

          {/* Name & Username */}
          <div className="flex flex-col md:flex-row md:mx-6">
            <span className="pl-2 text-sm">{personalInfo.firstName} {personalInfo.lastName} ({personalInfo.username})</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
