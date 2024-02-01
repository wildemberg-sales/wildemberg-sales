import { Inter } from "next/font/google";
import "./globals.css";
import FooterComponent from "@/components/FooterComponent/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wildemberg Sales",
  description: "Site de Wildemberg Sales",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <HeaderComponent/>
        {children}
        <FooterComponent/>
      </body>
      
    </html>
  );
}
