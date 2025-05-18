import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { allFontVariables } from "./utils/fonts";
import AliensFooter from "./components/Footer";
import SalesforceModalTrigger from "./components/GlobalButton/GlobalFormButton";

export const metadata: Metadata = {
  title: {
    default: 'Alens Group',
    template: "%s - aliens group"
  },
  description: "we are builders",
  twitter:{
    card:"summary_large_image"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={allFontVariables.join(' ')}>
        <Navbar/>
        <SalesforceModalTrigger/>
        {children}
        <AliensFooter/>
      </body>
    </html>
  );
}
