// import PrimaryLayout from '#/ui/layouts/PrimaryLayout';
// import clsx from 'clsx';
// import Image from 'next/image';
// import { NextPageWithLayout } from '../page';
// type Client = {
//   name?: string;
//   image: string;
// };
// const clients: Client[] = [
//   { image: '/clients/mahindra.png' },
//   { image: '/clients/mediassist.png' },
//   { image: '/clients/girnarsoft.png' },
// ];
// const Portfolio: NextPageWithLayout = () => {
//   return (
//     <div className="px-6 text-left text-gray-800 md:p-12 md:mb-4 bg-gray-50 bg-red md:pt-36">
//       <div className="container mx-auto xl:px-32">
//         <div className="grid gap-12 lg:grid-cols-2">
//           <div className="w-full mt-12 lg:mt-0 lg:w-12/12">
//             <h6 className="mb-2 text-2xl font-bold tracking-tight md:text-3xl lg:text-3xl">
//               <span className="text-blue-600">Our happy clients</span>
//             </h6>
//             <h6 className="mb-16 text-2xl font-bold tracking-tight text-gray-600 md:text-4xl lg:text-5xl">
//               Top clients we have worked with
//             </h6>
//           </div>
//         </div>
//         <div className="grid w-full grid-cols-1 gap-2 mb-4 sm:grid-cols-2 lg:grid-cols-3 ">
//           {clients.map((client, index) => {
//             return (
//               <div key={index} className="p-6 ">
//                 <div>
//                   <Image
//                     src={client.image}
//                     alt="client-image"
//                     width={200}
//                     height={100}
//                     className={clsx('')}
//                   />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;
// Portfolio.getLayout = (page) => {
//   return <PrimaryLayout>{page}</PrimaryLayout>;
// };
import PrimaryLayout from '#/ui/layouts/PrimaryLayout';
import clsx from 'clsx';
import Image from 'next/image';
import { NextPageWithLayout } from '../page';
type Client = {
  name?: string;
  image: string;
};
const clients: Client[] = [
  { image: '/clients/mahindra.png' },
  { image: '/clients/mediassist.png' },
  { image: '/clients/girnarsoft.png' },
];
const Portfolio: NextPageWithLayout = () => {
  return (
    <div className="px-6 text-left text-gray-800 md:p-12 md:mb-4 bg-gray-50 bg-red md:pt-36">
      <div className="container mx-auto xl:px-32">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="w-full mt-12 lg:mt-0 lg:w-12/12">
            <h6 className="mb-2 text-2xl font-bold tracking-tight md:text-3xl lg:text-3xl">
              <span className="text-blue-600">Our happy clients</span>
            </h6>
            <h6 className="mb-16 text-2xl font-bold tracking-tight text-gray-600 md:text-4xl lg:text-5xl">
              Top clients we have worked with
            </h6>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-2 mb-4 sm:grid-cols-2 lg:grid-cols-3 ">
          {clients.map((client, index) => {
            return (
              <div key={index} className="p-6 ">
                <div>
                  <Image
                    src={client.image}
                    alt="client-image"
                    className={clsx('')}
                    width={200}
                    height={100}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <h1>We have provided them resources of React JS,Angular JS,Go Lang, Node JS, .Net, .Net Core, Django, PHP, Android, IOS, Manual Testing, UI/UX Designer, and also provided them employees on our payroll on contract basis.  </h1>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
Portfolio.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};