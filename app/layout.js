import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "../components/Navbar";
import { Toaster } from 'react-hot-toast';
// import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "E-Shop | Home",
  description: "Next.js E-commerce Storefront",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <Toaster position="top-center" />
          <div className="flex flex-1">
            {/* <Sidebar /> */}
            <main className="flex-1 p-6 bg-gray-50">{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
