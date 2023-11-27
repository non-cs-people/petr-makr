<script lang="ts">
    import { onMount } from 'svelte';
    import { fabric } from 'fabric';
    import basePetr from '../assets/petr.png'
  
    let canvas: fabric.Canvas | undefined;
    let selectedColor = "#000000"; // Default color value
    let backgroundColor: string = "#ffffff"; // Default background color set to white (#ffffff)
    let brushSize = 5; // Default brush size
    let baseImageGroup: fabric.Group;
    let inputImage: HTMLInputElement;
    let file: File | null = null;
    let imageURL: string | null = null;
    let activateTab: string = 'download';
  
    onMount(() => {
        canvas = new fabric.Canvas('my-canvas', { 
            isDrawingMode: true,
            backgroundColor: backgroundColor
        });
        // Set the initial color and brush size for the canvas drawing brush
        canvas.freeDrawingBrush.color = selectedColor;
        canvas.freeDrawingBrush.width = brushSize;

        let width = getWidth();

        canvas.setWidth(width * canvas.getZoom());
        canvas.setHeight(width * canvas.getZoom());

        fabric.Image.fromURL(basePetr, function(img: any) {
            img.scaleToHeight(width);
            img.scaleToHeight(width-100);
            img.selectable = false;
            baseImageGroup = new fabric.Group([img], {
                selectable: false,
            });
        // Calculate the centered position
        const canvasCenterX = canvas.width / 2;
        const canvasCenterY = canvas.height / 2;
        const imageWidth = img.getScaledWidth();
        const imageHeight = img.getScaledHeight();
        const paddingTop = 50; // Adjust this value for top padding
        const paddingBottom = 50; // Adjust this value for bottom padding
        const imageLeft = canvasCenterX - imageWidth / 2;
        const imageTop = canvasCenterY - imageHeight / 2 + paddingTop - paddingBottom; // Apply padding to top

        // Set the image position
        baseImageGroup.set({ left: imageLeft, top: imageTop });

        canvas.add(baseImageGroup);
        canvas.renderAll();
        });
    });
  
    const getWidth = () => {
      if(window.innerWidth < 600) return window.innerWidth;
      return 600;
    }
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
          const canvasWidth = canvas.getWidth();
          const canvasHeight = canvas.getHeight();

          // Calculate the desired dimensions (1/5 of canvas size)
          const desiredWidth = canvasWidth / 5;
          const desiredHeight = canvasHeight / 5;
          img.scaleToWidth(desiredWidth);
          img.scaleToHeight(desiredHeight);
          canvas.add(img);
          canvas.renderAll();
        });
        }
    }
    function changeDrawMode() {
      if (canvas) {
        canvas.isDrawingMode = !canvas.isDrawingMode;
        canvas.renderAll();
  }
    }
    function removeSelected() {
        if (canvas) {
        const activeObject = canvas.getActiveObject();
        if (activeObject) {
            canvas.remove(activeObject);
            canvas.discardActiveObject();
        }
        }
    }
    function updateCanvasBackground() {
        if (canvas) {
        canvas.setBackgroundColor(backgroundColor, canvas.renderAll.bind(canvas));
        }
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

    function handleKeyPress(event: any) {
      if (event.key === 'Enter') {
        // Handle the Enter key press (or any other key as needed)
        // For example, you can trigger the same action as the click event
        showOption('drawing');
      }
    }
    let selectedOption = '';
      function showOption(option: any) {
        selectedOption = option;
      }

    function createAccessories() {
      
    }

  </script>
  

  <svelte:head>
    <link href="https://fonts.googleapis.com/css?family=Manrope" rel="stylesheet">
</svelte:head>

  <style>
    .header {
      display: flex;
      background: #29629F;
      margin: 20px 0px;
    }

    .header-title {
      color: white;
      padding: 20px;
      font-family: 'Manrope', sans-serif;
    }

    #my-canvas {
        border: 1px solid #000;
    }
    #navbar {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      font-weight: bold;
      color: black;
      width: 20%;
      height: 100%;
      /* padding: 10px;  */
    }
    #customize-bar{
      display: flex;
      /* justify-content: space-around; */
      align-items: stretch;
      background-color: #29629F;
      color: white;
      width: 80vw;
      max-width: 800px;
      min-width: 600px;
      height: 30vh;
      max-height: 300px;
      min-height: 150px;
      padding: 20px;
      margin: 20px;
    }

    .nav-item{
      display: flex;
      flex-wrap: wrap;
      flex-grow: 1;
      flex-shrink: 0; 
      flex-basis: auto; 
      border-radius: 20px;
      background-color: #f8d447;
      margin: 2px;
      align-content: center;
      height: auto;
      justify-content: center;
    }
    .editbox{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      background-color: #FFE993;
      width: 70%;
      padding: 30px;
      margin-left: 10px;
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
    .color-container {
        margin: auto;
    }
    button {
        padding: 10px;
        background-color: #007bff;
        color: #fff;
        border: none;
        cursor: pointer;
        margin:0 auto;
        display: flex;
    }
    .add-remove-button-container {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    h1 {
        text-align: center;
    }
    h2 {
        text-align: center;
    }
    .petr-options {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .drawing-content{
      display: flex;
      flex-direction: column;
      align-items: center;  
      justify-content: center; 
      margin: 5px 0;
      width: 70%;
    }
    .accessory-category{
      border-radius: 10px;
      padding: 5px;
      color: white;
      background-color: #29629F;
      margin: 2px;
      align-items: center;
    }
    .makerow{
      display: flex;
      flex-direction: row;
    }
  </style>

<div class="header">
  <h1 class="header-title">Petr Maker</h1>
</div>

<div class="canvas-container">
  <canvas id="my-canvas" bind:this={canvas} width="2400" height="2400" on:drawing={handleDrawing}></canvas>
  <div id="customize-bar">
    <div id="navbar">
      <div
        class="nav-item"
        on:click={() => showOption('accessories')}
        on:keydown={createAccessories}
        tabindex="0"
        role="button"
      >
        Accessories
      </div>
      <div
        class="nav-item"
        on:click={() => showOption('drawing')}
        on:keydown={handleKeyPress}
        tabindex="0" 
        role="button"
      >
        Drawing
      </div>
      <div
        class="nav-item"
        on:click={() => showOption('image')}
        on:keydown={handleKeyPress}
        tabindex="0"
        role="button"
      >
        Image
      </div>
      <div
        class="nav-item"
        on:click={() => showOption('delete')}
        on:keydown={handleKeyPress}
        tabindex="0"
        role="button"
      >
        Delete
      </div>
    </div>
    <div class="editbox" id="editbox">

      <!-- Conditionally render content based on the selected option -->

      {#if selectedOption === 'accessories'}
        <div id="" class="petr-options">
        </div>
      {/if}

      {#if selectedOption === 'drawing'}
        <div id="drawing-content" class="petr-options">
          <div class="pen_color">
            <input id="color_picker" type="color" bind:value={selectedColor} on:change={handleColorChange} />
          </div>
          <input id="color-container" type="color" bind:value={backgroundColor} on:change={updateCanvasBackground} />
          <input id="brush_size_picker" type="range" min="1" max="20" step="1" bind:value={brushSize} on:input={handleBrushSizeChange} />
          <button on:click={changeDrawMode}>Brush</button>
          <button on:click={changeDrawMode}>Cursor</button>
          <button on:click={removeSelected}>Remove Selected</button>
        </div>
      {/if}

      {#if selectedOption === 'image'}
        <div id="image-content" class="petr-options">
          <input type="file" bind:this={inputImage} on:change={handleFileInput} />
          {#if imageURL}
            <button on:click={handleCanvasDraw}>Draw Image on Canvas</button>
          {/if}
          <button on:click={removeSelected}>Remove Selected</button>
        </div>
      {/if}

      {#if selectedOption === 'delete'}
        <div id="delete-content" class="petr-options">
          <button id="add-remove-button-container" on:click={clearCanvas}>Clear Canvas</button>
        </div>
      {/if}
    </div>
  </div>
</div>




<!-- The rest of your HTML content -->
<div class="tab" class:selected={activateTab === 'download'}>
  <h2>Save your creations!</h2>
  <button on:click={(e) => {
      const data = canvas.toDataURL({format: 'png', quality: 1, multiplier: 4});
      const link = document.createElement('a');
      link.download = 'my_petr.png';
      link.href = data;
      link.click();
  }}>save</button>
</div>

