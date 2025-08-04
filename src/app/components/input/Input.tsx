import { type InputProps, Input } from 'react-aria-components';

function _Input(props: InputProps) {
  return (
    <Input
      {...props}
      className="w-full flex-1 border-none bg-transparent px-3 py-2 text-base leading-5 text-gray-900 outline-hidden"
    />
  );
}

export { _Input as Input };
