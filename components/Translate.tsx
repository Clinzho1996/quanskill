import Script from "next/script";
interface GoogleTranslateElement extends google.translate.TranslateElement {
	InlineLayout: {
		SIMPLE: number;
	};
}

function Translate() {
	return (
		<section>
			{/* Google Translate Script */}
			<Script
				id="google-translate"
				strategy="afterInteractive"
				src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
				onLoad={() => {
					console.log("Google Translate script loaded");
					window.googleTranslateElementInit = () => {
						new window.google.translate.TranslateElement(
							{
								pageLanguage: "en",
								includedLanguages: "en,vi",
								layout: (
									window.google.translate
										.TranslateElement as unknown as GoogleTranslateElement
								).InlineLayout.SIMPLE,
							},
							"google_translate_element"
						);
					};
					window.googleTranslateElementInit();
				}}
			/>
			<div className="notranslate" style={{ display: "none" }}>
				This text will not be translated.
			</div>
			<div
				id="google_translate_element"
				style={{
					display: "flex",
					alignItems: "center",
					flexDirection: "row",
					zIndex: 1000,
					position: "absolute",
					right: 470,
					top: 27,
				}}></div>
		</section>
	);
}

export default Translate;
