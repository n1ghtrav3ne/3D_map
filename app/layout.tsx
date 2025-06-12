import "./globals.css";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={'overflow-hidden'} dir={'rtl'}>
      <body className={'flex flex-col !m-0 !p-0 bg-black'}>
        {children}
      </body>
    </html>
  );
}
