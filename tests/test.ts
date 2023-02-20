import { expect, test } from '@playwright/test';


// import wasm from "../gameboy-emu/Cargo.toml";


test('index page has expected h1', async ({ page }) => {
	// const bindings = await wasm();

	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Welcome to SvelteKit');


});
