// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-vercel';
// import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { importAssets } from 'svelte-preprocess-import-assets';
import { mdsvex } from "mdsvex";
import relativeImages from "mdsvex-relative-images";


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		importAssets(),
		mdsvex({
			extensions: ['.md', '.svx'],
			layout: {
				_: "/src/layouts/default.svelte", // Default layout for markdown files
				blog: "/src/layouts/blog.svelte",


				// project: "./path/to/article/layout.svelte",
				// _: "./path/to/fallback/layout.svelte"
			},
			remarkPlugins: [relativeImages],
		}),
	],
	extensions: ['.svelte', '.md', '.svx'],
	kit: {
		// https://kit.svelte.dev/docs/adapter-static
		adapter: adapter(
			{
				fallback: '200.html' // may differ from host to host
			}
		)
	}
};

export default config;
