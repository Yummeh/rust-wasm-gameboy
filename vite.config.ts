import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { ViteRsw } from 'vite-plugin-rsw';


const config: UserConfig = {
	plugins: [sveltekit(), ViteRsw()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
