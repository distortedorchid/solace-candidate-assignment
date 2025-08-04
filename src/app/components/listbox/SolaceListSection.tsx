import {
  Collection,
  Header,
  ListBoxItem,
  ListBoxSection,
  ListBoxSectionProps
} from 'react-aria-components';
import { SolaceListItem } from './SolaceListItem';
import { ISolaceListItem } from './SolaceComboBox';

interface SolaceListSectionProps extends ListBoxSectionProps<ISolaceListItem> {
  label: string;
}

function SolaceListSection(props: SolaceListSectionProps) {
  return (
    <ListBoxSection>
      <Header className="text-default text-xs font-bold">{props.label}</Header>
      <Collection items={props.items}>
        {(item) => (
          <SolaceListItem key={item.key} textValue={item.title}>
            {item.title}
          </SolaceListItem>
        )}
      </Collection>
    </ListBoxSection>
  );
}

export { SolaceListSection };
