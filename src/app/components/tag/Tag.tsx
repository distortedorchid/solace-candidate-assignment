import { Tag, TagProps } from 'react-aria-components';

interface SpeciatlyTagProps extends TagProps {
  item: object;
}

function SpecialtyTag(props: SpeciatlyTagProps) {
  return (
    <Tag
      className={
        'm-1 rounded-xl bg-zinc-600 px-2 py-1 text-sm font-bold text-white'
      }
    >
      {props.item.title}
    </Tag>
  );
}

export { SpecialtyTag };
