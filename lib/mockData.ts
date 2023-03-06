import {
  digitallottie,
  hr_lottie2,
  mobilelottie,
  softwarelottie,
  training,
  webdevlottie,
} from '#/ui/assets';
import { Service, TechnologyCardType } from '#/ui/universal/types';
export const whoWeAre = [
  {
    name: 'About us',
    url: '#',
  },
  {
    name: 'Contact us',
    url: '#',
  },
  {
    name: 'Terms & Conditions',
    url: '#',
  },
  {
    name: 'Disclaimer',
    url: '#',
  },
  {
    name: 'Privacy Policy',
    url: '#',
  },
  {
    name: 'FAQ',
    url: '#',
  },
];

export const expertise = [
  {
    name: 'Software Development',
    url: '/services',
  },
  {
    name: 'Mobile Development',
    url: '/services',
  },
  {
    name: 'Resource Outsourcing',
    url: '/services',
  },
  {
    name: 'Digital Marketing',
    url: '/services',
  },
  {
    name: 'Training',
    url: '/services',
  },
];

export const clients = [
  { image: '/clients/mahindra.png' },
  { image: '/clients/mediassist.png' },
  { image: '/clients/girnarsoft.png' },
];

export const services: Service[] = [
  {
    name: 'Resource Outsourcing',
    description:
      'We provide Access specialized skills and expertise without long-term hires. Outsource to streamline operations and achieve tech success.',
    url: '#',
    lottie: hr_lottie2,
  },

  {
    name: 'Software Development',
    description:
      'Every business is unique, so are the needs of every company. Give a kick start to your business by having a custom made software application.',
    url: '#',

    lottie: softwarelottie,
  },
  {
    name: 'Mobile App Development',
    description:
      'Picking the right team of experienced developers ensures the delivery of high-quality and scalable apps that provide a seamless user experience.',
    url: '#',

    lottie: mobilelottie,
  },
  {
    name: 'Web Development',
    description:
      'Every business is unique, so are the needs of every company. Give a kick start to your business by having a custom made software application.',
    url: '#',
    lottie: webdevlottie,
  },

  {
    name: 'Digital Marketing & Web Analytics',
    description:
      'Digital Marketing is all about Driving the right prospects to your website and booking engine is the central role of Digital Marketing',
    url: '#',
    lottie: digitallottie,
  },

  {
    name: 'Training',
    description:
      'Training Conducted By Appture Technology provide real time project training with code explanation and implementation.',
    url: '#',
    lottie: training,
  },
];

export const technologyCardArray: TechnologyCardType[] = [
  {
    title: 'WEB DEVELOPMENT',
    cardImage: '',
    titleImage: '',
    direction: '',
  },
  {
    title: 'APP DEVELOPMENT',
    cardImage: '',
    titleImage: '',
    direction: 'reverse',
  },
  {
    title: 'DEVOPS',
    cardImage: '',
    titleImage: '',
    direction: '',
  },
  {
    title: 'ENGAGEMENT MODELS',
    cardImage: '',
    titleImage: '',
    direction: 'reverse',
  },
];
