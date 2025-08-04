import {
  ComboBox,
  ListBox,
  Popover,
  type ComboBoxProps
} from 'react-aria-components';

import { FieldLabel } from '../field/FieldLabel';
import { ComboBoxGroup } from './ComboBoxGroup';
import { ISolaceListItem, SolaceListItem, SolaceListSection } from '../listbox';

interface SolaceComboProps<T extends object> extends ComboBoxProps<T> {
  label: string;
}

function SolaceComboBox(props: SolaceComboProps<ISolaceListItem>) {
  return (
    <ComboBox className={'w-64'} onSelectionChange={props.onSelectionChange}>
      <FieldLabel>{props.label}</FieldLabel>
      <ComboBoxGroup />
      <Popover className="entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out max-h-60 w-64 overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5">
        <ListBox
          className="p-1 outline-hidden"
          items={props.items}
          selectionMode="none"
        >
          {(item) =>
            item.children ? (
              <SolaceListSection items={item.children} label={item.title} />
            ) : (
              <SolaceListItem textValue={item.title} id={item.title}>
                {item.title}
              </SolaceListItem>
            )
          }
        </ListBox>
      </Popover>
    </ComboBox>
  );
}

export { SolaceComboBox };
