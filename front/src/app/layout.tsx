import React from "react";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="es">
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
