<script lang="ts">
</script>

<div class="space-y-8">
	<h1 class="text-7xl tracking-wide text-slate-700">Hello!</h1>
	<div class="h-1 w-20 rounded bg-slate-700"></div>
	<h2 class="gradient animate p-4 font-serif text-gray-900">
		My name is Kieran Sukachevin. I am a software developer and artist currently living in Southern
		California.
	</h2>

	<p class="text-xl text-gray-900">
		I am passionate about building new projects and pursuing new ideas at all times. My wheelhouse
		is in frontend web development, primarily in React. Aside from personal endeavors, I have
		extensive experience building large-scale, highly scalable web apps used by thousands of users
		(checkout my Linkedin). Feel free to reach out to me via the contact page!
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
