declare namespace google {
	namespace translate {
		class TranslateElement {
			constructor(options: TranslateOptions, element: string);
		}

		interface TranslateOptions {
			pageLanguage: string;
			includedLanguages: string;
			layout: number;
		}

		const TranslateElement: {
			InlineLayout: {
				SIMPLE: number;
			};
		};
	}
}

// Define the global callback function
declare function googleTranslateElementInit(): void;
