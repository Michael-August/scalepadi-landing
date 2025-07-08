import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "ScalePadi",
  description: "No 1 Business Padi for Scaling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased lg:w-[1440px] lg:max-w-[1440px] lg:mx-auto w-screen`}
      >
        <div className="flex flex-col">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
