interface AvatarProps {
  alt?: string;
  src: string;
}

export default function Avatar({ alt = 'Avatar Photo', src }: AvatarProps) {
  return (
    <img
      className={`inline-block h-10 w-10 rounded-full ring-2 ring-white`}
      src={src}
      alt={alt}
    />
  );
}
