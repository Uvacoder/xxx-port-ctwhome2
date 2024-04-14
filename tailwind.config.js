/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts,md}'],
	theme: {
		extend: {}
	},
	plugins: [
		require('daisyui'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/container-queries')
	],
	daisyui: {
		themes: [
			{
				ctw: {
					primary: '#ffb83d',
					'primary-focus': '#db8b00',
					'primary-content': '#ffffff',
					secondary: '#5e9c91',
					'secondary-focus': '#3e655f',
					'secondary-content': '#FFFFFF',
					accent: '#37cdbe',
					'accent-focus': '#2aa79b',
					'accent-content': '#FFFFFF',
					neutral: '#3d4451',
					'neutral-focus': '#2a2e37',
					'neutral-content': '#ffffff',
					'base-100': '#1C202F',
					'base-200': '#30374F',
					'base-300': '#474f6b',
					'base-content': '#E8E8E8',
					info: '#2094f3',
					success: '#009485',
					warning: '#FF9900',
					error: '#ff5724'
				}
			},
			'light',
			'dark',
			'cupcake',
			'bumblebee',
			'emerald',
			'corporate',
			'synthwave',
			'retro',
			'cyberpunk',
			'valentine',
			'halloween',
			'garden',
			'forest',
			'aqua',
			'lofi',
			'pastel',
			'fantasy',
			'wireframe',
			'black',
			'luxury',
			'dracula'
		]
	}
};
