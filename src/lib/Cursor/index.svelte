<script>
	import { onMount } from 'svelte';

	export let offsetTop = 0;

	let top = -20;
	let left = -20;
	let height = 10;
	let width = 10;

	onMount(() => {
		window.addEventListener('mousemove', (event) => {
			left = event.pageX - width / 2;
			top = event.pageY - height / 2 - offsetTop;
		});
	});
</script>

<span
	class="h-[{height}px] w-[{width}px] absolute pointer-events-none 
        bg-yellow-400"
	style="top:{top}px;left:{left}px;"
/>
