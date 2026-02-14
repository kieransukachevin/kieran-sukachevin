<script lang="ts">
	import { asset } from '$app/paths';

	// include resume.css asset as well
	const resumeCss = asset('/resume.css');
</script>

<iframe src={asset('/resume.html')} class="h-full w-170" title="Resume" />
