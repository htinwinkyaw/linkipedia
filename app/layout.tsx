import "./globals.css";

import BodyWrapper from "./_components/wrapper/BodyWrapper";
import Container from "./_components/wrapper/Container";
import CustomToaster from "./_components/CustomToaster";
import { Inter } from "next/font/google";
import LoadingProvider from "./_providers/LoadingProvider";
import type { Metadata } from "next";
import Navbar from "./_components/nav/Navbar";
import ThemeProvider from "./_providers/ThemeProvider";
import ThemeWrapper from "./_components/wrapper/ThemeWrapper";
import { Toaster } from "react-hot-toast";

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
        <LoadingProvider>
          <body className={inter.className}>
            <CustomToaster />
            <BodyWrapper>
              <Navbar />
              <main>
                <Container>{children}</Container>
              </main>
            </BodyWrapper>
          </body>
        </LoadingProvider>
      </ThemeWrapper>
    </ThemeProvider>
  );
}
