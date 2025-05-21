// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { allFontVariables } from "./utils/fonts";
import AliensFooter from "./components/Footer";
import SalesforceModalTrigger from "./components/GlobalButton/GlobalFormButton";
import ZoomBlocker from "./components/ZoomBlocker";

export const metadata: Metadata = {
  title: {
    default: "Aliens Group",
    template: "%s - aliens group",
  },
  description: "We are builders",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={allFontVariables.join(" ")}>
        <Navbar />
        <SalesforceModalTrigger />
        {/* Add ZoomBlocker here */}
        <ZoomBlocker />
        {children}
        <AliensFooter />
      </body>
    </html>
  );
}
