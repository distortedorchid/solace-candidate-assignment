'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface SearchContextType {
  location?: string;
  setLocation: (s: string) => void;
  degree?: string;
  setDegree: (s: string) => void;
  minExperience?: number;
  setMinimumExperience: (n: number) => void;
  specialties?: number[];
  setSpecialties: (ids: number[]) => void;
}

const SearchContext = createContext<SearchContextType | null>(null);

export const useSearchContext = () => {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error('SearchContext not found');
  return ctx;
};

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useState<string>();
  const [degree, setDegree] = useState<string>();
  const [minExperience, setMinimumExperience] = useState<number>();
  const [specialties, setSpecialties] = useState<number[]>();

  return (
    <SearchContext.Provider
      value={{
        location,
        setLocation,
        degree,
        setDegree,
        minExperience,
        setMinimumExperience,
        specialties,
        setSpecialties
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
