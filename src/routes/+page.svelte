<script lang="ts">
	import { resolve, asset } from '$app/paths';
</script>

<div class="space-y-8">
	<div class="flex flex-row justify-between">
		<div class="space-y-4">
			<h1 class="mt-8 inline-block text-8xl tracking-wide text-slate-700">Hello!</h1>
			<div class="h-1 w-20 rounded bg-slate-700"></div>
		</div>
		<div></div>
		<img
			src={asset('/profile.jpg')}
			alt="Profile Picture"
			class="inline-block size-60 rounded-3xl shadow-lg"
		/>
		<div></div>
	</div>
	<h2 class="gradient animate p-4 font-serif text-gray-900">
		My name is Kieran Sukachevin. I am a software developer and artist currently living in Southern
		California.
	</h2>

	<p class="text-xl text-gray-900">
		I am passionate about building <strong>new projects</strong> and I love learning
		<strong>new things</strong>, whether it is new frontend frameworks, new ways of designing better
		UIs, or new ideas from the
		<a
			href="https://www.goodreads.com/user/show/166417120-kieran-sukachevin"
			target="_blank"
			rel="noopener noreferrer"
			class="underline">books I read</a
		>.
	</p>
	<p class="text-xl text-gray-900">
		As a software developer, I specialize in frontend web development, primarily with <em>React</em
		>, and I have extensive experience building
		<strong> highly scalable, enterprise web apps</strong> used by thousands of users (<a
			href="https://www.linkedin.com/in/kieransukachevin/"
			target="_blank"
			rel="noopener noreferrer"
			class="underline">checkout my Linkedin</a
		>).
	</p>
	<p class="text-xl text-gray-900">
		Feel free to reach out to me via the
		<a href={resolve('/contact')} class="underline">contact page</a> :)
	</p>
</div>

<style>
	.gradient {
		background-size: 300% 300%;
		background-image: linear-gradient(0.25turn, #d44d24, #ffffb6, #b4f987);
	}
	.animate {
		animation: animatedBackground 8s linear infinite alternate;
	}
	@keyframes animatedBackground {
		from {
			background-position-x: 0%;
		}
		to {
			background-position-x: 100%;
		}
	}
</style>
