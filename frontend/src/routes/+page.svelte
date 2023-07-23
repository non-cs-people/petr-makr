<script lang="ts">
    import { onMount } from 'svelte';
    import { fabric } from 'fabric';
    import basePetr from '../assets/base_petr.png'

    let canvas: fabric.Canvas | undefined;
    let selectedColor = "#000000"; // Default color value
    let brushSize = 5; // Default brush size
    let width: any;

    const getWidth = () => {
        if(window.innerWidth < 600) return window.innerWidth;
        return 600;
    }

    onMount(()=>{
        canvas = new fabric.Canvas('canvas');
        width = getWidth();

        canvas.setWidth(width * canvas.getZoom());
        canvas.setHeight(width * canvas.getZoom());

        fabric.Image.fromURL(basePetr, function(img: any) {
        img.scaleToWidth(width);
        img.scaleToWidth(width);
        img.selectable = false;
        canvas.add(img)
        canvas.renderAll()
        });
    })
</script>

<style>
    #canvas {
      border: 1px solid #000;
    }
</style>

<canvas id=canvas></canvas>