import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto px-10 py-10 bg-blue-50 min-h-screen">
          <div className="flex gap-x-10 px-4 py-2 mb-10">
            <Link className="px-4 py-2 bg-white shadow rounded-lg" href="/1">
              /[id] route
            </Link>
            <Link
              className="px-4 py-2 bg-white shadow rounded-lg"
              href="/list/1"
            >
              /list/[id] route
            </Link>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
