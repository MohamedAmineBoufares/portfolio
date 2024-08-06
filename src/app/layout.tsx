import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Providers from "@/context/providers";
import BgColors from "@/ui/bg-colors";
import Header from "@/ui/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohamed Amine | Portfolio",
  description:
    "I’m Mohamed Amine Boufares, a Frontend Developer with expertise in React.js, Next.js, and Redux. Explore my portfolio to see how I transform ideas into responsive, user-friendly web applications. For collaboration or inquiries, feel free to get in touch!",
  keywords: [
    "React.js",
    "Next.js",
    "Redux.js",
    "Frontend",
    "Front-end",
    "Developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}
      >
        <BgColors />

        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
