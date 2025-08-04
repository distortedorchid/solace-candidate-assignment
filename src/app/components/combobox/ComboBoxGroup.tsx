import { Button } from 'react-aria-components';
import { ArrowDown } from '../icons/ArrowDown';
import { FieldGroup } from '../field/FieldGroup';
import { Input } from '../input/Input';

function ComboBoxGroup() {
  return (
    <FieldGroup>
      <Input />
      <Button className="text-default pressed:bg-zinc-300 flex items-center rounded-r-lg border-0 border-l border-solid border-l-zinc-300 px-3 transition hover:bg-zinc-100">
        <ArrowDown size={28} />
      </Button>
    </FieldGroup>
  );
}

export { ComboBoxGroup };
