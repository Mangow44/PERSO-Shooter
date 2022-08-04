<script>
	import { onMount } from 'svelte';

	export let offsetTop = 0;
	export let ammunition = 0;

	let top = -20;
	let left = -20;
	let height = 10;
	let width = 10;

	onMount(() => {
		const cursor = document.querySelector('#cursor');

		window.addEventListener('mousemove', (event) => {
			left = event.pageX - width / 2;
			top = event.pageY - height / 2 - offsetTop;
		});

		window.addEventListener('click', () => {
			cursor?.classList.toggle('shoot');
		});

		cursor.addEventListener('animationend', () => {
			cursor.classList.remove('shoot');
		});
	});
</script>

<span
	id="cursor"
	class="absolute pointer-events-none z-20
        rounded-full bg-yellow-400"
	style="height:{height}px;width:{width}px;top:{top}px;left:{left}px;"
/>
