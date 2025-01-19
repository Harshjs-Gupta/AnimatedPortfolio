import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Notification from "@/components/toastifyNotification/notification";
import SplashCursor from "@/components/SplashCursor/SplashCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Harsh Gupta Portfolio",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden overflow-y-scroll antialiased`}
      >
        <Notification />
        <Navbar />
        <SplashCursor />
        {children}
      </body>
    </html>
  );
}
