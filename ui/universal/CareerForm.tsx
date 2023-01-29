'use client';
import clsx from 'clsx';
import { useState } from 'react';
import { Errors, FormData } from './types';

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  city: '',
  state: '',
  postalCode: '',
  profile: '',
  aboutProfile: '',
  experience: '',
};

const CareerForm = () => {
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
    console.log(formData);

    let newErrors: { [key: string]: string } = {};

    if (!formData.firstName) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.city) {
      newErrors.city = 'City is required';
    }
    if (!formData.state) {
      newErrors.state = 'State is required';
    }
    if (!formData.postalCode) {
      newErrors.postalCode = 'Postal Code is required';
    }
    if (!formData.profile) {
      newErrors.profile = 'Profile is required';
    }
    if (!formData.aboutProfile) {
      newErrors.aboutProfile = 'About Profile is required';
    }
    if (!formData.experience) {
      newErrors.experience = 'Experience is required';
    }

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
    } else {
      console.log(formData);

      // Make API call or do something else with the form data
    }
  };

  return (
    <>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Personal Information
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Use a permanent address where you can receive mail.
                  </p>
                </div>
              </div>
              <div className="mt-5 md:col-span-2 md:mt-0">
                <div className="overflow-hidden shadow sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          // value={formData.firstName}
                          onChange={(e) => handleChange(e)}
                          autoComplete="given-name"
                          className={clsx(
                            'block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
                            {
                              'ring-2 ring-red-500 ring-offset-red-700':
                                errors.firstName,
                            }
                          )}
                        />
                        {errors.firstName && (
                          <p className="text-red-500">{errors.firstName}</p>
                        )}
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          onChange={(e) => handleChange(e)}
                          id="lastName"
                          autoComplete="family-name"
                          className={clsx(
                            'block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
                            {
                              'ring-2 ring-red-500 ring-offset-red-700':
                                errors.lastName,
                            }
                          )}
                        />
                        {errors.lastName && (
                          <p className="text-red-500">{errors.lastName}</p>
                        )}
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="email-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email address
                        </label>
                        <input
                          type="text"
                          onChange={(e) => handleChange(e)}
                          name="email"
                          id="email"
                          autoComplete="email"
                          className={clsx(
                            'block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
                            {
                              'ring-2 ring-red-500 ring-offset-red-700':
                                errors.email,
                            }
                          )}
                        />
                        {errors.email && (
                          <p className="text-red-500">{errors.email}</p>
                        )}
                      </div>

                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          onChange={(e) => handleChange(e)}
                          name="city"
                          id="city"
                          className={clsx(
                            'block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
                            {
                              'ring-2 ring-red-500 ring-offset-red-700':
                                errors.city,
                            }
                          )}
                        />
                        {errors.city && (
                          <p className="text-red-500">{errors.city}</p>
                        )}
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="region"
                          className="block text-sm font-medium text-gray-700"
                        >
                          State / Province
                        </label>
                        <input
                          type="text"
                          onChange={(e) => handleChange(e)}
                          name="state"
                          id="state"
                          className={clsx(
                            'block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
                            {
                              'ring-2 ring-red-500 ring-offset-red-700':
                                errors.state,
                            }
                          )}
                        />
                        {errors.state && (
                          <p className="text-red-500">{errors.state}</p>
                        )}
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="postal-code"
                          className="block text-sm font-medium text-gray-700"
                        >
                          ZIP / Postal code
                        </label>
                        <input
                          type="text"
                          onChange={(e) => handleChange(e)}
                          name="postalCode"
                          id="postalCode"
                          className={clsx(
                            'block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
                            {
                              'ring-2 ring-red-500 ring-offset-red-700':
                                errors.postalCode,
                            }
                          )}
                        />
                        {errors.postalCode && (
                          <p className="text-red-500">{errors.postalCode}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>

          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Profile
                </h3>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="role"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Current/Previous Role
                      </label>
                      <div className="flex mt-1 rounded-md shadow-sm">
                        <input
                          type="text"
                          onChange={(e) => handleChange(e)}
                          name="profile"
                          id="profile"
                          className={clsx(
                            'block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
                            {
                              'ring-2 ring-red-500 ring-offset-red-700':
                                errors.profile,
                            }
                          )}
                        />
                      </div>
                      {errors.profile && (
                        <p className="text-red-500">{errors.profile}</p>
                      )}
                    </div>
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="role"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Experience (in years, months)
                      </label>
                      <div className="flex mt-1 rounded-md shadow-sm">
                        <input
                          type="text"
                          name="experience"
                          id="experience"
                          onChange={(e) => handleChange(e)}
                          className={clsx(
                            'block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
                            {
                              'ring-2 ring-red-500 ring-offset-red-700':
                                errors.experience,
                            }
                          )}
                        />
                      </div>
                      {errors.experience && (
                        <p className="text-red-500">{errors.experience}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-gray-700"
                    >
                      About
                    </label>
                    <div className="mt-1">
                      <textarea
                        onChange={(e) => handleChange(e)}
                        name="aboutProfile"
                        id="aboutProfile"
                        className={clsx(
                          'block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
                          {
                            'ring-2 ring-red-500 ring-offset-red-700':
                              errors.aboutProfile,
                          }
                        )}
                      />
                      {errors.aboutProfile && (
                        <p className="text-red-500">{errors.aboutProfile}</p>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description for your profile.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit application
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CareerForm;
