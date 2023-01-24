import Link from 'next/link';

const whoWeAre = [
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
const FooterSection = () => {
  return (
    <div className="w-full px-24 py-6 text-white bg-gray-600 ">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div>
          <h2 className="text-xl">Who we are</h2>
          <div className="mt-6">
            <ul>
              {whoWeAre.map((item, index) => {
                return (
                  <li
                    className="mb-2 hover:underline-offset-2 hover:underline"
                    key={index}
                  >
                    <Link href={item.url}>{item.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div>Our Expertise</div>
        <div>Footer</div>
      </div>
    </div>
  );
};

export default FooterSection;
