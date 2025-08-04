// hooks/useAdvocatesQuery.ts
import { useQuery } from '@tanstack/react-query';
import { useSearchContext } from '@/app/context/SearchContext';
import { Advocate } from '@/app/page';

export interface AdvocateWithSpecialties extends Advocate {
  specialties: Array<{ id: number; title: string }>;
}

function useAdvocateQuery() {
  const { location, degree, minExperience, specialties } = useSearchContext();

  const queryKey = ['advocates', location, degree, minExperience, specialties];

  const params = new URLSearchParams();
  if (location) params.set('city', location);
  if (degree) params.set('degree', degree);
  if (typeof minExperience === 'number')
    params.set('minExperience', minExperience.toString());
  if (specialties?.length) params.set('specialties', specialties.join(','));

  return useQuery<AdvocateWithSpecialties[]>({
    queryKey,
    queryFn: async () => {
      const res = await fetch(`/api/advocates?${params.toString()}`);
      if (!res.ok) throw new Error('Failed to fetch advocates');
      const json = await res.json();
      console.log(json);
      return json;
    },
    staleTime: 1000 * 60 * 5
  });
}
export { useAdvocateQuery };
