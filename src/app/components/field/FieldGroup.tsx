import { ReactNode } from 'react';
import { Group } from 'react-aria-components';

function FieldGroup({ children }: { children: ReactNode }) {
  return (
    <Group className="border-1-opal-300 flex rounded-lg bg-white/90 shadow-md ring-1 ring-black/10 transition focus-within:bg-white focus-visible:ring-2 focus-visible:ring-black">
      {children}
    </Group>
  );
}

export { FieldGroup };
