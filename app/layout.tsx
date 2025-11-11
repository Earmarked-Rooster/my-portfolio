// Import the Metadata type from Next.js for defining page metadata.
import type { Metadata } from "next";
// Import the Geist and Geist_Mono fonts from Google Fonts.
import { Geist, Geist_Mono } from "next/font/google";
// Import the global CSS file.
import "./globals.css";

// Import the portfolio data from the config file.
import portfolioData from "@/lib/config";

// Initialize the Geist Sans font with a CSS variable and Latin subsets.
const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

// Initialize the Geist Mono font with a CSS variable and Latin subsets.
const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

// Define the metadata for the page, including the title and description.
export const metadata: Metadata = {
	title: `${portfolioData.name}'s Personal Website`,
	description: `All about ${portfolioData.name}`,
};

// Define the RootLayout component, which is the root layout for the entire application.
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				// Apply the font variables and antialiasing to the body.
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{/* Render the children components. */}
				{children}
			</body>
		</html>
	);
}
