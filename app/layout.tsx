import "./globals.css";

import Container from "./_components/Container";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "./_components/nav/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linkipedia",
  description: "Collect and display you personal directories in here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={inter.className}>
        <Navbar />
        <main>
          <Container>{children}</Container>
        </main>
      </body>
    </html>
  );
}
