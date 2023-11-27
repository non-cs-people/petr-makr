<script lang="ts">
	import Canvas from './Canvas.svelte';
    import { onMount } from 'svelte';
    import { fabric } from 'fabric';
  
    export let canvas: fabric.Canvas | undefined;
  
    onMount(() => {
      canvas = new fabric.Canvas('my-canvas');
    });
  
    function addRectangle() {
      if (canvas) {
        const rect = new fabric.Rect({
          left: 100,
          top: 100,
          fill: 'red',
          width: 200,
          height: 100,
        });
  
        canvas.add(rect);
      }
    }

  	const getWidth = () => {
    if(window.innerWidth < 600) return window.innerWidth;
    return 600;
  }
</script>	


<canvas id="my-canvas" width="250" height="250" style="border:1px solid #000000;"></canvas>
<button on:click={addRectangle}>Add Rectangle</button>
<div>
	<h2>export</h2>
	<button on:click={(e) => {
	  const data = canvas.toDataURL({format: 'png', quality: 1, multiplier: 4});
	  const link = document.createElement('a');
	  link.download = 'dev-jeans.png';
	  link.href = data;
	  link.click();
	}}>save</button>
  </div>

<style>
	.counter {
		display: flex;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		margin: 1rem 0;
	}

	.counter button {
		width: 2em;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 0;
		background-color: transparent;
		touch-action: manipulation;
		font-size: 2rem;
	}

	.counter button:hover {
		background-color: var(--color-bg-1);
	}

	svg {
		width: 25%;
		height: 25%;
	}

	path {
		vector-effect: non-scaling-stroke;
		stroke-width: 2px;
		stroke: #444;
	}

	.counter-viewport {
		width: 8em;
		height: 4em;
		overflow: hidden;
		text-align: center;
		position: relative;
	}

	.counter-viewport strong {
		position: absolute;
		display: flex;
		width: 100%;
		height: 100%;
		font-weight: 400;
		color: var(--color-theme-1);
		font-size: 4rem;
		align-items: center;
		justify-content: center;
	}

	.counter-digits {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.hidden {
		top: -100%;
		user-select: none;
	}
</style>