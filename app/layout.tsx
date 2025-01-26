import { CartProvider } from "@/context/CartContext";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
	title: "Quanskill",
	description: "Empowering You with Future-Proof Skills",
	icons: {
		icon: "/icon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="custom-scrollbar">
			<body className={`${inter.variable}`}>
				<ToastContainer />
				<CartProvider>{children}</CartProvider>
			</body>
		</html>
	);
}
