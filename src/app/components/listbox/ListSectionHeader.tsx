import { Header } from 'react-aria-components';

function ListSectionHeader(props: { label: string }) {
  return (
    <Header className="text-default text-xs font-bold">{props.label}</Header>
  );
}

export { ListSectionHeader };
