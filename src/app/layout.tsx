import { Metadata } from "next";
import Nav from "../components/nav/Nav";
import ReactQueryProvider from "../services/providers/ReactQueryProvider";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "FilmiX - Simple VOD website",
  description: "FilmiX - Simple VOD website!",
  keywords: ["movies", "tv shows", "vod"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <div className="overflow-hidden">
            <Nav />
            {children}
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
