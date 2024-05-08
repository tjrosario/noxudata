import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  level?: string;
  size?: string;
  [props: string]: any;
}

export default function Button({
  children,
  className = '',
  level = 'default',
  size = 'xs',
  ...props
}: ButtonProps) {
  const info = 'text-orange-600 border-orange-600 hover:bg-orange-100';
  const danger = 'text-red-600 border-red-600 hover:bg-red-100';

  return (
    <button
      className={`bg-white hover:bg-gray-100 border border-gray-300 border-solid rounded-md px-3 py-2  font-medium ${className} ${
        level === 'info' ? info : ''
      } ${level === 'danger' ? danger : ''} text-${size}`}
      {...props}
    >
      {children}
    </button>
  );
}
