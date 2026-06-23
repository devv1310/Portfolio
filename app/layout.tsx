import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Devanshu Vishwakarma — Full Stack Developer & Data Analyst",
  description:
    "Portfolio of Devanshu Vishwakarma, a Full Stack Developer and Data Analyst based in Bhopal, India, specializing in React, Python, Django and FastAPI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-base font-sans antialiased">
        <div className="grain" />
        {children}
      </body>
    </html>
  );
}
