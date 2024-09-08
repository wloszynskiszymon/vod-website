import { Metadata } from 'next';
import ReactQueryProvider from '../providers/ReactQueryProvider';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'FilmiX - Simple VOD website',
  description: 'FilmiX - Simple VOD website!',
  keywords: ['movies', 'tv shows', 'vod'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
