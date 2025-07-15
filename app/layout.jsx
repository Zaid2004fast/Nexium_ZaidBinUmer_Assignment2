import { Inter } from 'next/font/google';
import './globals.css';
import { ReduxProvider } from '@lib/redux/provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Blog Summarizer by Zaid',
  description: 'Summarize your favorite blogs with AI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
