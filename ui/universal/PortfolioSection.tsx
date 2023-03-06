import { clients } from '#/lib/mockData';
import clsx from 'clsx';

// const PortfolioSection = () => {
//   return (
//     <div className="flex flex-col py-8">
//       <h1 className="mx-auto text-4xl font-bold md:text-6xl">Top Clients</h1>
//       <div className="grid grid-cols-1 p-6 sm:grid-cols-2 md:grid-cols-3 ">
//         {clients.map((client, index) => {
//           return (
//             <div key={index} className="p-6 ">
//               <img
//                 src={client.image}
//                 className={clsx(
//                   'sm:grayscale hover:grayscale-0 transition-all duration-300'
//                 )}
//               />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

const PortfolioSection = () => {
  return (
    <div className="flex flex-col py-8">
      <h1 className="mx-auto text-4xl font-bold md:text-6xl">Top Clients</h1>
      <div className="grid grid-cols-1 p-6 sm:grid-cols-2 md:grid-cols-3 ">
        {clients.map((client, index) => {
          return (
            <div key={index} className="p-6 ">
              <img
                src={client.image}
                width={200}
                className={clsx(
                  'sm:grayscale hover:grayscale-0 transition-all duration-300'
                )}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioSection;