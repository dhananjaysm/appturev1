///CAREER TYPES

export type Career = {
  role: string;
  id: string;
  description: string;
  location: string;
  category: string;
  status: string;
  date: string;
};
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  state: string;
  postalCode: string;
  profile: string;
  aboutProfile: string;
  experience: string;
}

interface Errors {
  firstName?: string;
  lastName?: string;
  email?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  profile?: string;
  aboutProfile?: string;
  experience?: string;
}

export type Filter = {
  id: number;
  category: string;
};

//CAREER TYPES

// CONTACT TYPES

interface ContactFormData {
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

interface ContactFormErrors {
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

//CONTACT TYPES

// SERVICES TYPES

type Service = {
  name: string;
  description: string;
  lottie?: Object;
  url?: string;
};

export type TechnologyCardType = {
  title: string;
  cardImage?: string;
  titleImage?: string;
  direction?: string;
};
