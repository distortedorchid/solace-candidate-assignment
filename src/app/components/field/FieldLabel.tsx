import { ReactNode } from 'react';
import { Label } from 'react-aria-components';

function FieldLabel({ children }: { children: ReactNode }) {
  return <Label className="cursor-default text-black">{children}</Label>;
}

export { FieldLabel };
