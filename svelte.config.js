// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-vercel';
// import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { importAssets } from 'svelte-preprocess-import-assets';
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		importAssets(),
		mdsvex({
			extensions: ['.md', '.svx'],
		}),
	],
	extensions: ['.svelte', '.md', '.svx'],
	kit: {
		// https://kit.svelte.dev/docs/adapter-static
		adapter: adapter()
	}
};

export default config;
