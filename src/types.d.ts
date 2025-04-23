/// <reference types="next" />

// Plausible Analytics type declaration
interface Window {
	plausible?: (
		eventName: string,
		options?: {
			callback?: () => void;
			props?: Record<string, string | number | boolean>;
		},
	) => void;
}

declare function plausible(event: string): void;
