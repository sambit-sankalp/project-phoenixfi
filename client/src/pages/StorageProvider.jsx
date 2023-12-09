import React, { useState } from 'react';
import { Layout } from '../components/Layout/Layout';
import { ButtonGroup } from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';

const StorageProvider = () => {
  const [formID, setformID] = useState('1');
  const formIds = ['1', '2'];

  const [isRegistered, setisRegistered] = useState(true);

  const handleForm = (id) => {
    switch (id) {
      case '1':
        return (
          <div className="flex items-center justify-start flex-col">
            <h3 class="mb-4 text-xl font-medium text-white">Invoice details</h3>
            <div class="mb-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  for="username"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-600 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="username.example"
                  required=""
                />
              </div>
            </div>
            <button
              type="submit"
              class="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Next Step: Payment Info
            </button>
          </div>
        );

      case '2':
        return <h1>2</h1>;

      case '3':
        return <h1>2</h1>;

      default:
        break;
    }
  };

  return (
    <Layout>
      <div className="borderz-10 relative flex min-h-screen w-full flex-col items-center justify-center bg-bgsecondary pb-20 pt-20 ">
        {isRegistered ? (
          <>
            <ol class="mb-4 flex w-1/4 items-center sm:mb-5">
              {formIds.map((id) => (
                <li
                  key={id}
                  onClick={() => setformID(id)}
                  class="flex w-full items-center text-blue-600 after:inline-block after:h-1 after:w-full after:border-4 after:border-b after:border-blue-100 after:content-[''] dark:text-blue-500 dark:after:border-blue-800"
                >
                  <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800 lg:h-12 lg:w-12">
                    {id}
                  </div>
                </li>
              ))}
              <li
                onClick={() => setformID('3')}
                class="flex w-auto items-center"
              >
                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 lg:h-12 lg:w-12">
                  3
                </div>
              </li>
            </ol>
            {handleForm(formID)}
          </>
        ) : (
          <ButtonGroup className="block">
            <div
              onClick={() => setisRegistered(true)}
              className="ml-4 inline-flex w-full cursor-pointer items-center justify-center gap-3 whitespace-nowrap rounded-lg bg-gradient-to-r from-[#01ACE4] via-[#00C1BD] to-[#00FFFA] px-8 py-2 text-3xl font-semibold text-black transition-colors duration-300 hover:bg-secondary-500 md:w-auto"
            >
              <FontAwesomeIcon icon={faSignIn} />
              Onboard as a Storage Provider
            </div>
          </ButtonGroup>
        )}
      </div>
    </Layout>
  );
};

export default StorageProvider;
