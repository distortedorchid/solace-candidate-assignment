import type { NumberFieldProps } from 'react-aria-components';
import { Button, NumberField } from 'react-aria-components';
import { FieldLabel } from '../field/FieldLabel';
import { FieldGroup } from '../field/FieldGroup';
import { Input } from '../input/Input';

export interface SolaceNumberFieldProps extends NumberFieldProps {
  label: string;
}

function _NumberField(props: SolaceNumberFieldProps) {
  return (
    <NumberField defaultValue={1} minValue={0} onChange={props.onChange}>
      <FieldLabel>{props.label}</FieldLabel>
      <FieldGroup>
        <Button
          className={
            'text-default pressed:bg-zinc-300 flex items-center rounded-l-lg border-0 border-solid px-3 font-bold transition hover:bg-zinc-100'
          }
          slot="decrement"
        >
          -
        </Button>
        <Input />
        <Button
          className={
            'text-default pressed:bg-zinc-300 flex items-center rounded-r-lg border-0 border-solid px-3 font-bold transition hover:bg-zinc-100'
          }
          slot="increment"
        >
          +
        </Button>
      </FieldGroup>
    </NumberField>
  );
}

export { _NumberField as SolaceNumberField };
