import type { Metadata } from 'next';
import './globals.css';
import NextTopLoader from 'nextjs-toploader';

export const metadata: Metadata = {
  title: 'JIVAH COLLECTIONS',
  description: 'JIVAH COLLECTIONS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased max-md:text-xs !scroll-smooth`}>
        <NextTopLoader color="#c96704" showSpinner={false} />
        {children}
      </body>
    </html>
  );
}
