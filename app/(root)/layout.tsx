"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Translate from "@/components/Translate";
import React from "react";

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<main>
			<Translate />
			<Header />
			{children}
			<Footer />
		</main>
	);
}

export default RootLayout;
