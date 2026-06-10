import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Launch Control Studio",
  description: "Coordinate roadmap, release, and operational launch activity.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
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
