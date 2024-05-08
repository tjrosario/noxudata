import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NoxuData - Frontend Demo',
  description:
    'Discover NoxuData, the revolutionary data analytics platform designed for business teams. Experience seamless integration with AI-driven insights, easy dashboard creation, and secure, accurate data processing. Tailored for non-SQL users, NoxuData transforms complex data into actionable insights in seconds.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>{children}</body>
    </html>
  );
}
