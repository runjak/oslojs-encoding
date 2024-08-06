import { bench, expect } from "vitest";
import { encodeBase64urlNoPadding } from "./base64.js";

const iterations = 1_000;

bench(
	"encodeBase64urlNoPadding: Oslo",
	() => {
		for (let i = 1; i <= 100; i++) {
			const bytes = new Uint8Array(i);
			crypto.getRandomValues(bytes);

			const oslo = encodeBase64urlNoPadding(bytes);

			expect(oslo).not.toEqual("");
		}
	},
	{ iterations }
);

bench(
	"encodeBase64urlNoPadding: Node",
	() => {
		for (let i = 1; i <= 100; i++) {
			const bytes = new Uint8Array(i);
			crypto.getRandomValues(bytes);

			const node = Buffer.from(bytes).toString("base64url");

			expect(node).not.toEqual("");
		}
	},
	{ iterations }
);
