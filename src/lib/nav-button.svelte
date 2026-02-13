<script lang="ts">
	import { page } from '$app/stores';

	const { href, children } = $props();

	// Check if the link is active (only for internal links)
	const isActive = $derived(
		typeof href === 'string' && !href.startsWith('http') && $page.url.pathname === href
	);
</script>

<a
	{href}
	class="text-2xl transition-colors hover:text-slate-800 {isActive ? 'text-slate-800' : ''}"
>
	{@render children()}
</a>
