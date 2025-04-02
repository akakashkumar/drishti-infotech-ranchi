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
  
  keywords: ['Drishti Infotech', 'Drishti Infotech Ranchi', 'Computer Institute in Kamre','Computer Institute in Tilta', 'DCA', 'Tally', 'DTP','Photoshop','Graphic Designing','Web Development',]
  
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
