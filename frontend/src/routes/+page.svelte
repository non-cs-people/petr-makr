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

    let selectedOption = 'accessories';
    function showOption(option: any) {
      selectedOption = option;
    }

    const accMap = new Map<string, string>([
      ["dva", "https://cdn.discordapp.com/attachments/1165802285448831086/1173444895822860450/Untitled_Artwork.png?ex=65766fb8&is=6563fab8&hm=fe7a4766a787e5e992493218c7db8ff3dc01e52823e6286a186c55e18ce09cee&"],
      ["beanie", "https://cdn.discordapp.com/attachments/1165802285448831086/1173411645914087496/Untitled_Artwork.png?ex=657650c1&is=6563dbc1&hm=d5881bf9eece1cfecd263aa24cf479cb569a14e06a37d0b78ce01d90793225ce&"],
      ["boba", "https://cdn.discordapp.com/attachments/1165802285448831086/1173434531475365888/0daf0032-28ce-4f5c-8ea6-c4065c76bc32.png?ex=65766611&is=6563f111&hm=8a762d1e357538483f88119b70616b6d354c0c30c1c6314ce718b4cad518ba99&"],
      ["halloween basket", "https://cdn.discordapp.com/attachments/1165802285448831086/1173432918480257144/88c21aff-eb67-46f3-9af8-5b09599d3b61.png?ex=65766491&is=6563ef91&hm=327166b74392c5b6e72c0f8f634f69c05b2e82fd7941453f9ffa5b12a419de3d&"],
      ["airpods", "https://cdn.discordapp.com/attachments/1165802285448831086/1173430838491365386/0e28b3a8-5ad5-45ec-bea1-be0e04635da2.png?ex=657662a1&is=6563eda1&hm=49ba67b7de2e7d7514f1c6db6ea08786879895538c833844cf55d6b6a6ee9617&"],
      ["macbook", "https://cdn.discordapp.com/attachments/1165802285448831086/1173428576759074887/Untitled_Artwork.png?ex=65766085&is=6563eb85&hm=e0e7e7678a862642a2279983c7e766f90605eb7fe869958f707ce4cf23cced08&"],
      ["stickered macbook", "https://cdn.discordapp.com/attachments/1165802285448831086/1173428266103754872/Untitled_Artwork.png?ex=6576603b&is=6563eb3b&hm=a875e3709d040fbfdb6efe03ba87eb3b8cb7204064f3837edaf182a3869bc36c&"],
      ["kung fu robe",  "https://cdn.discordapp.com/attachments/1165802285448831086/1173427676384604170/yin_yang.png?ex=65765faf&is=6563eaaf&hm=64f44053624eb3cb32a4a9583e1a16f7f3047e312999774817ca0d06715c6ca6&"],
      ["gucci belt", "https://cdn.discordapp.com/attachments/1165802285448831086/1173413422155702282/Untitled_Artwork.png?ex=65765268&is=6563dd68&hm=ef625bad70175cbea0f1d7da33114981338a4d608ab2c98b9b43ef08a6c59e92&"],
      ["hearts", "https://cdn.discordapp.com/attachments/1165802285448831086/1173411577416912926/Untitled_Artwork.png?ex=657650b0&is=6563dbb0&hm=b6f132b0c3471ad4fa8131afac5066e3e3fe8449bea02f06f837807481c92f03&"],
      ["jersey", "https://cdn.discordapp.com/attachments/1165802285448831086/1173411518671495308/Untitled_Artwork.png?ex=657650a2&is=6563dba2&hm=49f8387036e347e14bcb805c6f3429885faadb472e6506c7044c044eb04ea418&"],
      ["gold chain", "https://cdn.discordapp.com/attachments/1165802285448831086/1173411352413487165/Untitled_Artwork.png?ex=6576507b&is=6563db7b&hm=fdcec3c8d271582d348b302266d2c8f7055d799b9f80cb3638e97e665c0473d2&"],
      ["boots", "https://cdn.discordapp.com/attachments/1165802285448831086/1173411280888016996/Untitled_Artwork.png?ex=6576506a&is=6563db6a&hm=781695d7b02458f02c413c54fcc41760ca010e267e8ec687f15246b41c584fb1&"],
      ["gojo shades", "https://cdn.discordapp.com/attachments/1165802285448831086/1173411221987393567/Untitled_Artwork.png?ex=6576505c&is=6563db5c&hm=9d2ab618dca7cb267d1730e26dc5913c7a5ba23d917193b2717029fbf7f5f1aa&"],
      ["gojo hair", "https://cdn.discordapp.com/attachments/1165802285448831086/1173411111685599293/Untitled_Artwork.png?ex=65765041&is=6563db41&hm=06d9bac99bd2abd5f18a2bffadebcc1f197793ff0b1292e038b50fbf916b4abf&"],
      ["apple watch", "https://cdn.discordapp.com/attachments/1165802285448831086/1165802341807702096/appleWatch.png?ex=65765189&is=6563dc89&hm=5b4bb55720ab23f1bfa58e28da9a79108daa4e597e491f3aa5873d83cdb84f19&"]

    ]);
    function showAccessory(option: string) {
      let imgURL : string | undefined = accMap.get(option)
      if (imgURL) {
        let imgElement = new Image();
        imgElement.crossOrigin = 'Anonymous';
        imgElement.src = imgURL;
        imgElement.onload = function() {
          let imgInstance = new fabric.Image(imgElement, {
            left: 0,
            top: 0,
          });
          const canvasWidth = canvas.getWidth();
          const canvasHeight = canvas.getHeight();
          imgInstance.scaleToWidth(canvasWidth);
          imgInstance.scaleToHeight(canvasHeight);
          canvas.add(imgInstance);
          canvas.renderAll();
        }
      }
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
      justify-content: center;
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
    .nav-item:active {
      background-color: aqua;
    }
    .editbox {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      background-color: #FFE993;
      width: 70%;
      height: 80%;
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
      width: 80%;
      height: 80%;
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
    .outfit {
      width: 100px;
      height: auto;
      border-radius: 50%;

    }
    .acc-content {
      display: inline-block;
      height: 40px;
      widows: 100px;
      padding: 5px;
      margin: 5px;
      overflow: scroll;
    }
    /* .button-grid button {
      padding: 10px;
      border: 1px solid #ccc;
      cursor: pointer;
    }

    .button-grid button:active {
      background-color: #007bff;
    } */
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
        on:keydown={handleKeyPress}
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
        <div class="button-grid">
          {#each Array.from(accMap) as [option, url]}
            <button class="acc-content" on:click={() => showAccessory(option)}> {option} </button>
          {/each}

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

