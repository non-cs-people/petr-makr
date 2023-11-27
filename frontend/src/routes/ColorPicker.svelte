<script lang="ts">
    import { createEventDispatcher } from 'svelte';
  
    export let initialColor = "#000000"; // Default color value, can be overridden
    let selectedColor = initialColor;

    // Create an event dispatcher to emit the color change event
    const dispatch = createEventDispatcher();
  
    function handleColorChange(event: any) {
      const input = event.target as HTMLInputElement;
      selectedColor = input.value;
      dispatch('colorChange', selectedColor);
    }
  </script>
  
<input id="color_picker" type="color" bind:value={selectedColor} on:change={handleColorChange} />

<!-- <style>
</style> -->
