import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

// Get this info from some external source (e.g. CMS)
const pages = {
  home: "/",
  blog: "/blog",
  about: "/about",
  contact: "/contact",
  login: "/login",
  sport: "/sport",
  brand: "/brand",
  discounts: "/discounts",
  category: "/category",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex items-center justify-center p-4">
          <ul className="flex gap-8">
            {Object.entries(pages).map(([name, path]) => (
              <li key={name}>
                <Link href={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
