import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { ViteRsw } from 'vite-plugin-rsw';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

const config: UserConfig = {
	plugins: [sveltekit(), wasm(), topLevelAwait(), ViteRsw()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	// optimizeDeps: {
	// 	// exclude: ['@syntect/wasm']
	// }
	server: {
		fs: {
			// Allow serving files from one level up to the project root
			allow: ['..']
		}
	}
};

export default config;
