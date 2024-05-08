import Image from 'next/image';

interface AvatarProps {
  alt?: string;
  src: string;
}

export default function Avatar({ alt = 'Avatar Photo', src }: AvatarProps) {
  return (
    <Image
      alt={alt}
      className={`inline-block h-10 w-10 rounded-full ring-2 ring-white`}
      height={256}
      src={src}
      width={256}
    />
  );
}
