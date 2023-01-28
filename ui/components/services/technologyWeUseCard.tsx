import founderlottie from '#/ui/landing/lottie_files/founder-blob.json';
import clsx from 'clsx';
import Lottie from 'lottie-react';
import { TechnologyCardType } from './TechnologyWeUse';

export default function TechnologyWeUseCard({
  card,
  index,
}: {
  card: TechnologyCardType;
  index: number;
}) {
  const { title, cardImage, titleImage, direction } = card;
  return (
    <div
      className={clsx(
        'flex flex-col  items:center justify-center  md:justify-between py-20',
        {
          'md:flex-row-reverse': (index + 1) % 2 === 0,
          'md:flex-row': (index + 1) % 2 !== 0,
        }
      )}
    >
      <div className="w-[30%] m-auto">
        <Lottie
          className="w-full h-full aspect-ratio:1/1"
          animationData={founderlottie}
          loop={true}
        />
      </div>
      <div className="flex flex-col content-center items-center w-full md:w-[70%] pt-10">
        <h6 className="mb-2 text-2xl font-bold tracking-tight md:text-3xl lg:text-3xl">
          <span className="text-blue-600">{title}</span>
        </h6>
        <div className="bg-yellow-400 min-h-[60px] h-full w-full">
          <img className="w-full aspect-ratio:1/1" />
        </div>
      </div>
    </div>
  );
}
