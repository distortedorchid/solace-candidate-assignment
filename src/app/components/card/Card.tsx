import { GridListItem } from 'react-aria-components';
import { Avatar } from './Avatar';
import { AdvocateDetails } from './AdvocateDetails';
import { AdvocateHeader } from './AdvocateHeader';
import { AdvocateWithSpecialties } from '@/app/hooks/useAdvocateQuery';

function Card({ advocate }: { advocate: AdvocateWithSpecialties }) {
  return (
    <GridListItem
      textValue={`${advocate.firstName} ${advocate.lastName}`}
      className={
        'm-3 w-100 rounded-3xl border border-zinc-300 p-4 font-bold text-zinc-600 shadow-lg'
      }
    >
      <AdvocateHeader advocate={advocate} />
      <section className={'flex'}>
        <Avatar />
        <AdvocateDetails advocate={advocate} />
      </section>
    </GridListItem>
  );
}

export { Card };
