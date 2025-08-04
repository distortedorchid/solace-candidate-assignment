import {
  Button,
  Collection,
  Disclosure,
  DisclosurePanel,
  Header,
  Heading,
  ListBox,
  ListBoxProps,
  ListBoxSection
} from 'react-aria-components';
import { SolaceListItem } from '../listbox/SolaceListItem';
import { ArrowDown } from '../icons/ArrowDown';
import { ListSectionHeader } from '../listbox';

interface ISpecialtyTag {
  title: string;
  specialties: Array<{ id: number; title: string }>;
}

function MultiSelect(props: ListBoxProps<ISpecialtyTag>) {
  return (
    <Disclosure className={'h-max-128'}>
      <Heading className="w-full">
        <Button
          slot="trigger"
          className={
            'border-1-opal-300 flex w-full rounded-lg bg-white/90 p-1 shadow-md ring-1 ring-black/10 outline-hidden transition focus-within:bg-white focus-visible:ring-2 focus-visible:ring-black'
          }
        >
          <ArrowDown size={28} />
          Specialties
        </Button>
      </Heading>
      <DisclosurePanel>
        <ListBox
          className="p-1 outline-hidden"
          items={props.items}
          selectionMode="multiple"
          onSelectionChange={props.onSelectionChange}
        >
          {(item) =>
            item.specialties && (
              <ListBoxSection>
                <ListSectionHeader label={item.title} />
                <Collection items={item.specialties}>
                  {(item) => (
                    <SolaceListItem key={item.id}>{item.title}</SolaceListItem>
                  )}
                </Collection>
              </ListBoxSection>
            )
          }
        </ListBox>
      </DisclosurePanel>
    </Disclosure>
  );
}

export { MultiSelect };
