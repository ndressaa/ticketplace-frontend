import type { Metadata } from 'next';
import { Roboto_Flex } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const robotoFlex = Roboto_Flex({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TicketPlace',
  description: 'Plataforma de ingressos',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoFlex.className}>
        <Toaster position="bottom-center" />
        {children}
      </body>
    </html>
  );
}
