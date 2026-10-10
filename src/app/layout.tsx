import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Slide, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AvatarContextProvider} from "../context/ProfileAvatar";


const hindSiliguri = Hind_Siliguri({
  variable: "--font-noto-bengali",
  subsets: ["bengali"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "বাজার দর",
  description: "বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের বাজার দর",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${hindSiliguri.variable} h-full antialiased`}
    >

      <body className="min-h-full flex bg-[#FAFCFA] flex-col font-bengali">
        <AvatarContextProvider>
          <Navbar />

          <ToastContainer
            position="top-center"
            autoClose={2500}
            hideProgressBar
            newestOnTop
            closeOnClick
            pauseOnHover
            draggable
            theme="light"
            transition={Slide}
            toastClassName="!rounded-xl !border !border-green-100 !shadow-lg"
            limit={3}
          />

          {children}
          <Footer />
        </AvatarContextProvider>
      </body>

    </html>
  );
}