import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import {Inter} from 'next/font/google'
import UserContext from "@/context/UserContext";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { Toaster as SonnarToaster } from "@/components/ui/sonner";


export const metadata: Metadata = {
  title: "AI Web Hero",
  description: "AI web builder",
};

const inter = Inter({
  display: 'auto',
  subsets: ["latin", "cyrillic-ext", "vietnamese", "latin-ext"],
  variable: "--font-inter",
  weight: "variable",
});


const aileron = localFont({
  src: [
    {
      path: './aileron/Aileron-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './aileron/Aileron-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './aileron/Aileron-Heavy.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './aileron/Aileron-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './aileron/Aileron-Thin.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './aileron/Aileron-UltraLight.otf',
      weight: '100',
      style: 'normal',
    },
  ]
})
const neue = localFont({
  src: [
    {
      path: './neue-montreal/neuemontreal-bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './neue-montreal/neuemontreal-medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './neue-montreal/neuemontreal-regular.otf',
      weight: '400',
      style: 'normal',
    },
  ]
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${aileron.className} ${inter.variable}`}>


      <body className="  h-screen font-sans ">
      <UserContext>

        {children}
        <SonnarToaster />

 </UserContext>
        </body>

      
    </html>
  );
}
