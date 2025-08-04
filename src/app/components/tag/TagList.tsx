import { TagGroup, TagList, TagListProps } from 'react-aria-components';
import { SpecialtyTag } from './Tag';

function SpecialtyTagList(props: TagListProps<any>) {
  return (
    <TagGroup aria-label="Specialties">
      <TagList items={props.items} className={'my-3 flex flex-wrap'}>
        {(item) => <SpecialtyTag item={item} />}
      </TagList>
    </TagGroup>
  );
}

export { SpecialtyTagList };
