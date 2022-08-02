<script>
	import { generateCoordinatesAB } from '$lib/data/generateCoordinates';
	import { onMount } from 'svelte';

	export let id = '';
	export let name = ''; // square ou circle et mettre un rounded full dessus
	export let score = 0;
	export let speed = 0;
	export let delay = 0;
	export let height = 0;
	export let width = 0;
	export let onClick = () => {};
	export let removeEnemy = () => {};

	let shot = false;
	let coordinates = { xA: 0, yA: 0, translationX: 0, translationY: 0 };

	async function setCoordinates() {
		coordinates = generateCoordinatesAB(height, width);

		setTimeout(() => {
			if (!shot) removeEnemy(id);
		}, (delay + speed) * 1000);
	}
</script>

{#await setCoordinates() then _}
	<div
		{id}
		class="animateEnemy absolute bg-c-white z-10
			{name == 'circle' ? 'rounded-full' : ''}"
		style="height:{height}px;width:{width}px;
        left:{coordinates.xA}px;top:{coordinates.yA}px;
        --xB:{coordinates.translationX}px;--yB:{coordinates.translationY}px;
        --speed:{speed}s;--delay:{delay}s;"
		on:click|self={() => {
			onClick();
			shot = true;
		}}
	/>
{/await}

<style>
	.animateEnemy {
		animation: movement var(--speed) linear forwards;
		animation-delay: var(--delay);
	}

	@keyframes movement {
		100% {
			transform: translate(var(--xB), var(--yB));
		}
	}
</style>
