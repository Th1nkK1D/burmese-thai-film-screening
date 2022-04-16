import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { default as WindiCSS } from 'vite-plugin-windicss';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess()],

	kit: {
		adapter: adapter(),
		prerender: {
			default: true
		},
		vite: {
			plugins: [WindiCSS()]
		}
	}
};

export default config;
