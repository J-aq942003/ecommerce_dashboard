import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
// import { Provider } from "react-redux";
import "./globals.css";
import StoreProvider from "@/redux/StoreProvider";
import { Provider } from "@/components/ui/provider";
import dotenv from "dotenv";
import { ProjectColors } from "@/lib/constants";
// import { store } from "@/redux/store";
///
dotenv.config();
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={``}>
      <body
        className={`${poppins.variable} antialiased overflow-y-hidden not-dark:bg-[#f8f8f8] dark:bg-[${ProjectColors.BACKGROUND_DARK}]`}
      >
        {/*Wrapping the App with the redux store*/}
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
