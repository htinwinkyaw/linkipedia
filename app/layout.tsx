import "./globals.css";

import Container from "./_components/wrapper/Container";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "./_components/nav/Navbar";
import ThemeProvider from "./_providers/ThemeProvider";
import ThemeWrapper from "./_components/wrapper/ThemeWrapper";

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
    <ThemeProvider>
      <ThemeWrapper>
        <body className={inter.className}>
          <Navbar />
          <main>
            <Container>{children}</Container>
          </main>
        </body>
      </ThemeWrapper>
    </ThemeProvider>
  );
}
