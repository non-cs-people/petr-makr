<script lang="ts">
  import { onMount } from 'svelte';
  import { fabric } from 'fabric';

  let canvas: fabric.Canvas | undefined;
  let backgroundColor: string = "#ffffff"; // Default background color set to white (#ffffff)

  onMount(() => {
    canvas = new fabric.Canvas('my-canvas', {
      backgroundColor: backgroundColor // Set the initial background color of the canvas
    });
  }
  )

  function updateCanvasBackground() {
    if (canvas) {
      canvas.setBackgroundColor(backgroundColor, canvas.renderAll.bind(canvas));
    }
  }
</script>

<main>
  <div class="color-container">
    <input type="color" bind:value={backgroundColor} on:change={updateCanvasBackground} />
  </div>
  <canvas id="my-canvas" width="400" height="300" style="border: 1px solid #000;"></canvas>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }

  canvas {
    margin-top: 20px;
  }

  .color-container {
    margin-top: 10px;
  }

</style>
