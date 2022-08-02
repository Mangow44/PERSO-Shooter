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
	class="absolute pointer-events-none z-20
        rounded-full bg-yellow-400"
	style="height:{height}px;width:{width}px;top:{top}px;left:{left}px;"
/>
