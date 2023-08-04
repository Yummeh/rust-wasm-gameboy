<script lang="ts">
	// IT WORKS
	import { onMount } from 'svelte';
	import * as wasm from '../../gameboy-emu/pkg/gameboy_emu';
</script>

<h1>Haha this is a new commit finally :P</h1>

<button
	on:click={() => {
		wasm.greet();
	}}>Hello</button
>
