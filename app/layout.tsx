import { css } from "@/styled-system/css";
import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { vstack } from "@/styled-system/patterns";
import { Exo } from "next/font/google";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const ExoFont = Exo({
  weight: ["400", "500", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-exo",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-color-mode="dark"
      className={clsx(
        css({
          height: "100%",
          boxSizing: "content-box",
        }),
        ExoFont.variable
      )}
    >
      <body
        suppressHydrationWarning={true}
        className={vstack({
          color: "secondary.inverted",
          fontSize: "base",
          fontWeight: "base",
          fontFamily: "exo",
          alignItems: "stretch",
          backgroundColor: "primary",
        })}
      >
        <Header />
        <main
          className={css({
            marginLeft: "20%",
            marginRight: "20%",
            height: "100%",
            border: "2px solid red",
          })}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
