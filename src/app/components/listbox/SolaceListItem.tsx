import { ListBoxItem, ListBoxItemProps } from 'react-aria-components';
import { CheckCircle } from '../icons/CheckCircle';

export interface ISolaceListItem {
  title: string;
  children?: Array<ISolaceListItem>;
  key: number;
}

function SolaceListItem(
  props: ListBoxItemProps & { children: React.ReactNode }
) {
  return (
    <ListBoxItem
      {...props}
      className="group flex cursor-default items-center gap-2 rounded-lg py-2 pr-4 pl-2 text-zinc-600 outline-hidden select-none focus:bg-zinc-200 focus:text-black"
    >
      {({ isSelected }) => (
        <>
          <span className="group-selected:font-medium flex flex-1 items-center gap-3 truncate font-normal">
            {props.children}
          </span>
          {isSelected && (
            <span className="flex w-5 items-center text-zinc-600">
              <CheckCircle size={28} />
            </span>
          )}
        </>
      )}
    </ListBoxItem>
  );
}

export { SolaceListItem };
