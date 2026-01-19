<script lang="ts">
	import './layout.css';
	import NavButton from '$lib/nav-button.svelte';

	const { children } = $props();
</script>

<div class="h-screen bg-white text-slate-800 transition-all">
	<nav class="flex items-center gap-6 border-b border-gray-500 px-16 py-4 text-slate-600">
		<NavButton href="/">About</NavButton>
		<NavButton href="/contact">Contact</NavButton>
	</nav>
	<div class="m-auto max-w-170 space-y-4 pt-12">{@render children()}</div>
</div>
