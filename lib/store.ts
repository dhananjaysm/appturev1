import { Filter } from '#/ui/universal/types';
import create from 'zustand';
import { filters } from './demo';

interface ScrollState {
  scroll: boolean;
  scrolling: (scroll: boolean) => void;
}

export const useScrollStore = create<ScrollState>()((set) => ({
  scroll: false,
  scrolling: (scroll) => set((state) => ({ scroll: scroll })),
}));

interface FilterState {
  filter: Filter;
  selectFilter: (filter: Filter) => void;
}

export const useFilterStore = create<FilterState>()((set) => ({
  filter: filters[0],
  selectFilter: (filter) => set((state) => ({ filter: filter })),
}));

interface CareerState {
  careers: any;
}

/*
THIS if for form
*/
