import type { Metadata } from "next";
import { IBM_Plex_Serif, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexSerif = IBM_Plex_Serif({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-ibm-plx-serif",
});

export const metadata: Metadata = {
    title: "Family Bank tracking",
    description: "This app is for family tracking financial status.",
    icons: {
        icon: "/icons/logo.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const bodyClassNames = [inter.variable, ibmPlexSerif.variable].join(" ");

    return (
        <html lang="en">
            <body className={bodyClassNames}>{children}</body>
        </html>
    );
}
