import type { Metadata } from "next";
import "./globals.css";
import Providers from "./libs/Providers";
import Header from "./components/Header";
import { Box } from "@mui/material";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          <Box component="main">{children}</Box>
        </Providers>
      </body>
    </html>
  );
}
