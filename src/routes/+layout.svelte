<script lang="ts">
	import './layout.css';
	import NavButton from '$lib/nav-button.svelte';
	import { resolve } from '$app/paths';

	const { children } = $props();
	// If you're using a fallback (i.e. SPA mode) you don't need to prerender all
	// pages by setting this here, but should prerender as many as possible to
	// avoid large performance and SEO impacts
	export const prerender = true;
	export const traillingSlash = 'always';
</script>

<div class="h-screen bg-white text-slate-800 transition-all">
	<nav class="flex items-center gap-6 border-b border-gray-500 px-16 py-4 text-slate-600">
		<NavButton href={resolve('/')}>About</NavButton>
		<NavButton href={resolve('/contact')}>Contact</NavButton>
	</nav>
	<div class="m-auto max-w-170 space-y-4 pt-12">{@render children()}</div>
</div>
