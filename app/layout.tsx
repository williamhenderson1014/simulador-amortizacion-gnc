import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const poppins = localFont({
  src: [
    { path: "./fonts/Poppins-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Poppins-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Poppins-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "En cuántos meses se paga solo el equipo de GNC",
  description:
    "Elija su vehículo, los kilómetros que hace por mes y el equipo que le entra. La cuenta muestra lo que gasta hoy en nafta, lo que pasaría a gastar con gas y en cuánto tiempo se recupera la conversión.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
