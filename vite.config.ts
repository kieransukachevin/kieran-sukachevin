import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { compile, compileAst } from 'tailwindcss';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	server: {
		port: 8080,
		hotUpdateEnvironments: () => {
			return compile('./static/tw-resume.css').then((r) => console.log(r));
		}
	}
});
