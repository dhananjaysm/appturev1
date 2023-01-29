'use client';

import contact_lottie from '#/ui/contact/contact_us.json';
import clsx from 'clsx';
import Lottie from 'lottie-react';
import { useState } from 'react';

interface FormData {
  name: string;
  phoneNumber: string;
  email: string;
  message: string;
  state: string;
  postalCode: string;
  profile: string;
  aboutProfile: string;
  experience: string;
}

interface Errors {
  name?: string;
  phoneNumber?: string;
  email?: string;
  message?: string;
  state?: string;
  postalCode?: string;
  profile?: string;
  aboutProfile?: string;
  experience?: string;
}

const initialFormData: FormData = {
  name: '',
  phoneNumber: '',
  email: '',
  message: '',
  state: '',
  postalCode: '',
  profile: '',
  aboutProfile: '',
  experience: '',
};

const contactDetails = {
  address:
    '225 Second Floor, Balaji Tower 6th, Near Radisson Blu, Durgapur, Jaipur 302018',
  phone: '01412729706',
  email: 'info@appturetechnology.com',
};
export default function FormContact() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: null });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    let newErrors: { [key: string]: string } = {};

    if (!formData.name) {
      newErrors.name = 'First name is required';
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (
      !/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(
        formData.phoneNumber
      )
    ) {
      newErrors.phoneNumber = 'Invalid phone number';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message) {
      newErrors.message = 'Message is required';
    }

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
    } else {
      console.log(formData);

      // Make API call or do something else with the form data
    }
  };
  return (
    <div className="flex w-full bg-gray-900 items-top">
      <div className="mx-auto sm:px-6 lg:px-8">
        <div className="w-full mt-4 overflow-hidden">
          <div className="grid w-full grid-cols-1 md:grid-cols-2">
            <div className="grid grid-cols-1">
              <div className="p-6 mx-6 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
                  Get in touch
                </h1>
                {/* <p className="mt-2 text-lg font-medium text-gray-600 text-normal sm:text-2xl dark:text-gray-400">
                  Fill in the form to start a conversation
                </p> */}

                <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div className="w-full ml-4 font-semibold tracking-wide text-md">
                    {contactDetails.address}
                  </div>
                </div>

                <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div className="w-40 ml-4 font-semibold tracking-wide text-md">
                    {contactDetails.phone}
                  </div>
                </div>

                <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="w-40 ml-4 font-semibold tracking-wide text-md">
                    {contactDetails.email}
                  </div>
                </div>
              </div>

              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
                className="flex flex-col justify-center p-6"
              >
                <div className="flex flex-col justify-between md:flex-row">
                  <div className="flex flex-col md:mr-2 md:w-1/2">
                    <label className="hidden">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      // value={formData.name}
                      onChange={(e) => handleChange(e)}
                      placeholder="Enter full name"
                      className={clsx(
                        'block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
                        {
                          'ring-2 ring-red-500 ring-offset-red-700':
                            errors.name,
                        }
                      )}
                    />
                    {errors.name && (
                      <p className="text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div className="flex flex-col md:w-1/2 ">
                    <label className="hidden">Number</label>
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      onChange={(e) => handleChange(e)}
                      className={clsx(
                        'block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
                        {
                          'ring-2 ring-red-500 ring-offset-red-700':
                            errors.phoneNumber,
                        }
                      )}
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-500">{errors.phoneNumber}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col mt-2">
                  <label className="hidden">Email</label>
                  <input
                    type="text"
                    onChange={(e) => handleChange(e)}
                    name="email"
                    placeholder="Email"
                    className={clsx(
                      'block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
                      {
                        'ring-2 ring-red-500 ring-offset-red-700': errors.email,
                      }
                    )}
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email}</p>
                  )}
                </div>

                <div className="flex flex-col mt-2">
                  <label className="hidden">Message</label>
                  <input
                    type="text"
                    onChange={(e) => handleChange(e)}
                    name="message"
                    placeholder="Message"
                    className={clsx(
                      'block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
                      {
                        'ring-2 ring-red-500 ring-offset-red-700':
                          errors.message,
                      }
                    )}
                  />
                  {errors.message && (
                    <p className="text-red-500">{errors.message} sjdfa;lsdjf</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 mt-3 font-bold text-white transition duration-300 ease-in-out from-[#2B81BA] via-blue-500 to-purple-500 bg-[length:400%_400%]  bg-gradient-to-r animate-border rounded-lg md:w-32 hover:bg-blue-dark hover:bg-indigo-500"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="hidden md:block">
              <Lottie
                animationData={contact_lottie}
                loop={true}
                className="w-50 h-50"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
