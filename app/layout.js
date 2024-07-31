import { Inter } from "next/font/google";
import "./globals.css";
import 'react-multi-carousel/lib/styles.css'; 
import Sidebar from "./_components/Sidebar";
import Lowbar from "./_components/Lowbar";
import 'bootstrap-icons/font/bootstrap-icons.css'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Pantry",
  description: "Developed By Rush Developers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="overflow-hidden lg:flex items-center h-screen w-screen">
          <Sidebar/>
          <main className=" h-full lg:h-screen w-screen flex flex-wrap items-center justify-center space-y-8  p-8 pb-16 lg:pb-0 overflow-x-hidden">
            {children}
          </main>
          <Lowbar/>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
