<script>
	import { onMount } from 'svelte';

	let top = -20;
	let left = -20;
	let height = 10;
	let width = 10;

	onMount(() => {
		const game = document.querySelector('#game');
		const cursor = document.querySelector('#cursor');

		game.addEventListener('mousemove', (e) => {
			// On décale des coordonnées de la souris donc il faut partir de (0, 0)
			cursor.style.transform =
				`translate3d(calc(${e.clientX}px - ${left}px - ${width / 2}px)` +
				`, calc(${e.clientY}px + ${top}px - ${height * 1.3}px), 0)`;
		});

		game.addEventListener('click', () => {
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
