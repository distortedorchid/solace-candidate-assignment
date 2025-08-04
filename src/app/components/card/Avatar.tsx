import Image from 'next/image';

function Avatar() {
  return (
    <Image
      alt="Image of Doctor"
      width="224"
      height="224"
      src="/avatar.png"
      className={
        'my-4 mr-6 h-28 w-28 rounded-full border border-zinc-400 shadow-lg'
      }
    />
  );
}

export { Avatar };
