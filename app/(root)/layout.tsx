import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<main>
			<Header />
			{children}
			<Footer />
		</main>
	);
}

export default RootLayout;
