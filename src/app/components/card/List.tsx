import { GridList } from 'react-aria-components';
import { Card } from './Card';
import { useAdvocateQuery } from '@/app/hooks/useAdvocateQuery';

function List() {
  const { data: advocates, isLoading, error } = useAdvocateQuery();

  if (isLoading) return <p>Loading advocates…</p>;
  if (error) return <p>Error loading advocates: {(error as Error).message}</p>;

  if (!advocates?.length) return <p>No advocates found.</p>;
  return (
    <GridList
      className={'flex w-full flex-wrap'}
      items={advocates}
      aria-label="Advocates"
    >
      {(item) => <Card advocate={item} />}
    </GridList>
  );
}

export { List };
