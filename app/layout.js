import { Inter, Syne, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const syne = Syne({ subsets: ['latin'], variable: '--font-syne' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

export const metadata = {
  title: 'Scale Builder by Promptletariat.com',
  description: 'Build validated psychology assessments with AI',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a0a2e" />
      </head>
      <body className={`${inter.variable} ${syne.variable} ${spaceGrotesk.variable} font-sans bg-deep-purple text-white`}>
        {children}
      </body>
    </html>
  );
}
