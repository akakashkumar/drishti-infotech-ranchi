import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Drishti Infotech",
  description: "A Computer Institute",
  
  keywords: ['drishti infotech', 'drishti infotech ranchi', 'computer institute in kamre','computer institute in tilta', 'dca', 'tally', 'dtp','photoshop','graphic designing','web development',]
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       
       <Header />
       {children}
       <Footer />
      </body>
    </html>
  );
}
