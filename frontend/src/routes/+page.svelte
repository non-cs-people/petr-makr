<script lang='ts'>
	import Drawing from './Drawing.svelte';
	import Canvas from './Canvas.svelte';
	import Save from './Save.svelte';
	// import welcome from '$lib/images/svelte-welcome.webp';
	// import welcome_fallback from '$lib/images/svelte-welcome.png';
	let canvas: any;
</script>

<svelte:head>
	<title>What</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Save {canvas}/>
</section>

<style>
</style>
