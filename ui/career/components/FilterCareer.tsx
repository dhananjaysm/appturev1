'use client';

import { filters } from '#/lib/demo';
import { useFilterStore } from '#/lib/store';
import clsx from 'clsx';
import { useState } from 'react';
export type Filter = {
  id: number;
  category: string;
};

const FilterCareer = () => {
  const [isActive, setIsActive] = useState(1);
  const { selectFilter, filter } = useFilterStore((s) => s);
  console.log(filter);
  return (
    <div className="flex flex-row space-x-6">
      {filters.map((filter, i) => {
        return (
          <button
            onClick={() => {
              setIsActive(filter.id);
              selectFilter(filter);
            }}
            className={clsx(
              'px-4 py-2 font-medium border rounded-lg cursor-pointer hover:bg-blue-500 hover:text-white',
              {
                'bg-blue-500 text-white': isActive == filter.id,
              }
            )}
            key={i}
          >
            <span className="uppercase">{filter.category}</span>
          </button>
        );
      })}
    </div>
  );
};

export default FilterCareer;
