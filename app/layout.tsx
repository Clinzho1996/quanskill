import { CartProvider } from "@/context/CartContext";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
			<head>
				{/* Meta Pixel Script */}
				<Script
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '3445030582295311');
              fbq('track', 'PageView');
            `,
					}}
				/>
				{/* NoScript Fallback */}
				<noscript>
					<img
						height="1"
						width="1"
						style={{ display: "none" }}
						src="https://www.facebook.com/tr?id=3445030582295311&ev=PageView&noscript=1"
					/>
				</noscript>
			</head>
			<body className={`${inter.variable}`}>
				<ToastContainer />
				<CartProvider>{children}</CartProvider>

				<Script
					src="https://embed.tawk.to/679892eb3a8427326075bac5/1iilvrqq9"
					strategy="afterInteractive"
					charSet="UTF-8"
					crossOrigin="anonymous"
				/>
			</body>
		</html>
	);
}
