import { Advocate } from '@/app/page';
import { Header } from 'react-aria-components';

function AdvocateHeader({ advocate }: { advocate: Advocate }) {
  return (
    <Header className={'border-b border-zinc-300 pb-3'}>
      {`${advocate.firstName} ${advocate.lastName}, ${advocate.degree}`}
    </Header>
  );
}

export { AdvocateHeader };
