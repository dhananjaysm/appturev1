import { technologyCardArray } from '#/lib/mockData';
import TechnologyWeUseCard from './ServicesTechnologyWeUse';

const TechnologyWeUse = () => {
  return (
    <div className="px-6 text-left text-gray-800 md:p-12 md:mb-4 bg-gray-50 bg-red md:pt-36">
      <div className="container mx-auto xl:px-32">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="w-full mt-12 lg:mt-0 lg:w-12/12">
            <h6 className="mb-2 text-2xl font-bold tracking-tight md:text-3xl lg:text-3xl">
              <span className="text-blue-600">TECHNOLOGY</span>
            </h6>
            <h6 className="mb-16 text-2xl font-bold tracking-tight text-gray-600 md:text-4xl lg:text-5xl">
              Technology we use
            </h6>
          </div>
        </div>
        {technologyCardArray.map((card, index) => (
          <TechnologyWeUseCard key={index} card={card} index={index} />
        ))}
      </div>
    </div>
  );
};

export default TechnologyWeUse;
