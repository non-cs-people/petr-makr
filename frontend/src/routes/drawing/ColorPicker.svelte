<script lang="ts">
    import { createEventDispatcher } from 'svelte';
  
    let selectedColor = "#000000"; // Default color value
  
    // Create an event dispatcher to emit the color change event
    const dispatch = createEventDispatcher();
  
    function handleColorChange(event: any) {
      selectedColor = event.target.value;
      // Emit the 'colorChange' event with the selected color as the payload
      dispatch('colorChange', selectedColor);
    }
  </script>
<input id="color_picker" type="color" bind:value={selectedColor} on:change={handleColorChange} />

<!-- <style>
</style> -->
