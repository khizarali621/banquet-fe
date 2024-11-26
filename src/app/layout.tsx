import { Inter } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import AppProvider from "@/providers/AppProvider";
import { Footer, Header } from "@/components/ui";
import generateMetadata from "@/lib/metadata";
import { ToastContainer } from "react-toastify";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const aeonik = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Aeonik-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Aeonik-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Aeonik-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-aeonik",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = generateMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={cn(
          "min-h-screen font-display antialiased",
          inter.variable,
          aeonik.variable
        )}
      >
        <AppProvider>
          <ToastContainer position="top-center" />
          <Header />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
