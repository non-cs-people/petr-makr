<script lang="ts">
    import { onMount } from 'svelte';
    import { fabric } from 'fabric';
  
    export let canvas: fabric.Canvas | undefined;
  
    let activateTab = 'download';

    const switchTab = (tabName) => {
        activeTab = tabName;
    };

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

<main style={'width: ${width}'}>
    <canvas id="my-canvas" width="250" height="250" style="border:1px solid #000000;"></canvas>
    <button on:click={addRectangle}>Add Rectangle</button>

    <div class="toolbar">
        <ul class="taps">
            <li>Background</li>
            <li>Download</li>
            <li>LingLongWong</li>
        </ul>
        <div class="tab" class:selected={activateTab === 'download'}>
            <h2>What do you think about your rectangle?</h2>
            <button on:click={(e) => {
            const data = canvas.toDataURL({format: 'png', quality: 1, multiplier: 4});
            const link = document.createElement('a');
            link.download = 'dev-jeans.png';
            link.href = data;
            link.click();
            }}>save dat ass</button>
        </div>
    </div>
</main>

    <footer style={'width: ${width}'}>
        <span>
            Website: <a href="https://uci.edu/">@uci</a>
        </span>
    </footer>

<style>
a {
    color: #0098fa;
    text-decoration: none;
}
main, footer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgb(56, 56, 56);
}
footer{
    flex-direction: row;
    gap: 10px;
    font-weight: 800;
    color: rgb(56, 56, 56)
}
.toolbar {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 600px;
    margin: 20px auto;
    padding: 20px 0;
    border: 1px solid #ccc;
    border-radius: 10px;
}
.tab:seleted{
    border-bottom-color: #0098fa;
}
.taps{
    display:flex;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    width: 100%;
}
.toolbar > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

button {
    padding: 5px 10px;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    font-weight: 700;
    cursor: pointer;
}
</style>