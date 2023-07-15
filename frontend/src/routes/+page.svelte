<script>
	import Drawing from './Drawing.svelte';
	import Canvas from './Canvas.svelte';
	// import welcome from '$lib/images/svelte-welcome.webp';
	// import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>What</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Canvas />
	<Drawing />
</section>

<style>
</style>
