<script lang="ts">
  import { onMount } from 'svelte';
  import { fabric } from 'fabric';
  import basePetr from '../../assets/base_petr.png'

  let canvas: fabric.Canvas | undefined;
  let selectedColor = "#000000"; // Default color value
  let brushSize = 5; // Default brush size
  let baseImageGroup: fabric.Group;


  onMount(() => {
    canvas = new fabric.Canvas('my-canvas', { isDrawingMode: true });
    // Set the initial color and brush size for the canvas drawing brush
    canvas.freeDrawingBrush.color = selectedColor;
    canvas.freeDrawingBrush.width = brushSize;

    let width = getWidth();

    canvas.setWidth(width * canvas.getZoom());
    canvas.setHeight(width * canvas.getZoom());

    fabric.Image.fromURL(basePetr, function(img: any) {
        img.scaleToWidth(width);
        img.scaleToWidth(width);
        img.selectable = false;
        baseImageGroup = new fabric.Group([img], {
          selectable: false,
        });
        canvas.add(baseImageGroup)
        canvas.renderAll()
    });
  });

  const getWidth = () => {
    if(window.innerWidth < 600) return window.innerWidth;
    return 600;
  }
  // Function to handle the colorChange event from the color picker
  function handleColorChange(event: any) {
    selectedColor = event.target.value;
    // Update the drawing brush color in the canvas
    canvas.freeDrawingBrush.color = selectedColor;
  }

  // Function to handle the brushSizeChange event from the brush size picker
  function handleBrushSizeChange(event: any) {
    brushSize = +event.target.value;
    // Update the drawing brush size in the canvas
    canvas.freeDrawingBrush.width = brushSize;
  }

  // Function to handle the drawing event on the canvas
  function handleDrawing(event: any) {
    if (canvas) {
      const path = event.detail;
      canvas.add(path);
    }
  }

  // Function to clear the canvas
  function clearCanvas() {
    if (canvas && baseImageGroup) {
      canvas.remove(...canvas.getObjects()); // Remove all objects on the canvas
      canvas.add(baseImageGroup); // Add the base image group back to the canvas
      canvas.renderAll();
    }
  }
</script>

<style>
  #my-canvas {
    border: 1px solid #000;
  }

  /* Style the container for canvas and controls */
  .canvas-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Style the color picker input */
  #color_picker {
    margin-top: 10px;
  }

  /* Style the brush size picker input */
  #brush_size_picker {
    margin-top: 10px;
  }
</style>

<h1>Drawing App</h1>
<div class="canvas-container">
  <canvas id="my-canvas" bind:this={canvas} width="800" height="400" on:drawing={handleDrawing}></canvas>
  <input id="color_picker" type="color" bind:value={selectedColor} on:change={handleColorChange} />
  <input id="brush_size_picker" type="range" min="1" max="20" step="1" bind:value={brushSize} on:input={handleBrushSizeChange} />
  <button on:click={clearCanvas}>Clear Canvas</button>
</div>
