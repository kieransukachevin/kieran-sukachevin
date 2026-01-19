<script lang="ts">
	const { href, children } = $props();
</script>

<a {href} class="text-2xl transition-colors hover:text-slate-800">
	{@render children()}
</a>
