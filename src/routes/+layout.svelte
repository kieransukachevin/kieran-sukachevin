<script lang="ts">
	import './layout.css';
	import NavButton from '$lib/nav-button.svelte';
	import { resolve, asset } from '$app/paths';

	const { children } = $props();
	// If you're using a fallback (i.e. SPA mode) you don't need to prerender all
	// pages by setting this here, but should prerender as many as possible to
	// avoid large performance and SEO impacts
	export const prerender = true;
	export const traillingSlash = 'always';
</script>

<div class="h-screen bg-white text-slate-800 transition-all">
	<div class=" border-b border-gray-500">
		<nav class="m-auto flex max-w-170 items-center gap-6 border-gray-500 py-4 text-slate-600">
			<NavButton href={resolve('/')}>About</NavButton>
			<NavButton href={resolve('/contact')}>Contact</NavButton>
			<NavButton href={'https://kieransukachevin.com/'}>Art</NavButton>

			<div class="flex-1"></div>

			<NavButton href={'https://www.linkedin.com/in/kieran-sukachevin-365a87198/'}>
				<img src={asset('/linkedin.png')} alt="Linkedin Logo" class="size-7" /></NavButton
			>
			<NavButton href={'https://github.com/kieransukachevin/'}
				><img src={asset('/github.svg')} alt="Github Logo" class="size-8" /></NavButton
			>
			<NavButton href={'https://www.instagram.com/kieransuka/'}
				><img src={asset('/instagram.svg')} alt="Instagram Logo" class="size-8" /></NavButton
			>
		</nav>
	</div>
	<div class="m-auto max-w-170 space-y-4 pt-6">{@render children()}</div>
</div>
