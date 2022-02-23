import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DateTime } from "luxon";

import { personalInformationState } from "../state/PersonalInformationState";
import MainLayout from "../layout/MainLayout";
import Alert from "../components/Alert";

const schema = yup
  .object({
    username: yup.string().required(),
    firstName: yup.string(),
    lastName: yup.string(),
    birthDate: yup.date().required(),
  })
  .required();

const PersonalInformation = () => {
  const [personalInfo, setPersonalInfo] = useRecoilState(
    personalInformationState
  );

  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setPersonalInfo({
      username: data.username,
      firstName: data.firstName,
      lastName: data.lastName,
      birthDate: DateTime.fromJSDate(data.birthDate).toFormat('yyyy-MM-dd')
    });

    setShowSuccess(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [showSuccess]);

  return (
    <MainLayout>
      <div className="h-fit mb-auto mt-12">
        {showSuccess ? (
          <Alert
            type="success"
            title="Success!"
            text="Your personal information was saved."
          />
        ) : (
          <></>
        )}

        <section className="max-w-4xl p-6 my-4 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
          <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
            Personal Information
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  id="username"
                  defaultValue={personalInfo.username}
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  {...register("username")}
                />
                {errors.username && (
                  <p className="ml-1 text-red-500 text-xs italic">
                    This field is required!
                  </p>
                )}
                <p className="ml-1 text-blue-500 text-xs italic">
                  Labs are assigned to specific usernames in the database.
                </p>
                <p className="ml-1 text-blue-500 text-xs italic">
                  Try: Sander, Rael, Dominik, or the default: User.
                </p>
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="firstName"
                >
                  First name
                </label>
                <input
                  id="firstName"
                  defaultValue={personalInfo.firstName}
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  {...register("firstName")}
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="lastName"
                >
                  Last name
                </label>
                <input
                  id="lastName"
                  defaultValue={personalInfo.lastName}
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  {...register("lastName")}
                />
              </div>

              <div>
              <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="birthDate"
                >
                  Birthdate
                </label>
                <input
                  id="birthDate"
                  type="date"
                  defaultValue={personalInfo.birthDate}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  {...register("birthDate", { required: true, valueAsDate: true })}
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Save
              </button>
            </div>
          </form>
        </section>
      </div>
    </MainLayout>
  );
};

export default PersonalInformation;
