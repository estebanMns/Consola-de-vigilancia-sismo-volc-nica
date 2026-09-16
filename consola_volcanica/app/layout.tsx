import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vigilancia sismo-volcánica",
  description: "Consola básica de vigilancia en tiempo real",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
