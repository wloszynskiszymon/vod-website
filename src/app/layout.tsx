import { Metadata } from 'next';
import '../index.css';

export const metadata: Metadata = {
  title: 'FilmiX - Simple VOD website',
  description: 'FilmiX - Simple VOD website!',
  themeColor: '#000000',
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
        <div id='root'>{children}</div>
      </body>
    </html>
  );
}
