import type { Metadata } from "next";
import localFont from "next/font/local"; // Import next/font/local
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

// Import Poppins font locally
const poppins = localFont({
  src: "./fonts/poppins-regular-webfont.woff2", // Path to your locally stored Poppins font
  variable: "--font-poppins", // CSS variable name for the font
  weight: "100 900", // Font weights available (adjust as needed)
});

// GeistSans and GeistMono configuration
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata configuration for the page
export const metadata: Metadata = {
  title: "Online Job Platform",
  description: "Create your own Online Job Platform Application.",
};

// RootLayout with Poppins applied
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        

        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
