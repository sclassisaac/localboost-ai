import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "LocalBoost AI",
  description: "AI-powered marketing assistant for local businesses",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
