<script lang="ts">
    import { onMount } from 'svelte';
    import { fabric } from 'fabric';
    
  
    let canvas: fabric.Canvas | undefined;
    let inputImage: HTMLInputElement;
    let file: File | null = null;
    let imageURL: string | null = null;

  
    onMount(() => {
      canvas = new fabric.Canvas('my-canvas');
    });

  function handleFileInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      file = inputElement.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        imageURL = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  function handleCanvasDraw() {
    if (file && imageURL && canvas) {
      fabric.Image.fromURL(imageURL, (img) => {
        canvas.add(img);
        canvas.renderAll();
      });
    }
  }
  
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

<main>
  <div class="file-button-container">
    <input type="file" bind:this={inputImage} on:change={handleFileInput} />
    {#if imageURL}
      <button on:click={handleCanvasDraw}>Draw Image on Canvas</button>
    {/if}
  </div>
  <div class="add-button-container">
    <button on:click={addRectangle}>Add Rectangle</button>
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

  /* Flex container for "Choose File" and "Draw Image on Canvas" buttons */
  .file-button-container {
    display: inline-flex;
    gap: 10px;
    margin-top: 10px;
  }

  /* Flex container for "Add Rectangle" button */
  .add-button-container {
    margin-top: 10px;
  }

  /* Optional: Adjust button styles */
  button {
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }
</style>

  