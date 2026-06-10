import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Launch Control Studio",
  description: "Coordinate roadmap, release, and operational launch activity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
