<script lang="ts">
    import { onMount } from 'svelte';
    import { fabric } from 'fabric';
  
    let canvas: fabric.Canvas | undefined;
  
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
  </script>
  
  <canvas id="my-canvas" width="250" height="250" style="border:1px solid #000000;"></canvas>
  <button on:click={addRectangle}>Add Rectangle</button>

  