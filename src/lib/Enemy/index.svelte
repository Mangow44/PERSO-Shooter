<script>
	import { generateCoordinatesAB } from '$lib/data/generateCoordinates';

	export let id = '';
	export let name = ''; // square ou circle et mettre un rounded full dessus
	export let speed = 0;
	export let delay = 0;
	export let height = 0;
	export let width = 0;
	export let onClick = () => {};

	let coordinates = { xA: 0, yA: 0, translationX: 0, translationY: 0 };
	let remove = false;

	async function setCoordinates() {
		coordinates = generateCoordinatesAB(height, width);
	}

	setTimeout(() => {
		remove = true;
	}, (delay + speed) * 1000);
</script>

{#await setCoordinates() then _}
	<div
		{id}
		class="animateEnemy absolute {remove ? 'hidden' : 'block'}"
		style="height:{height}px;width:{width}px;
        left:{coordinates.xA}px;top:{coordinates.yA}px;
        --xB:{coordinates.translationX}px;--yB:{coordinates.translationY}px;
        --speed:{speed}s;--delay:{delay}s;"
		on:click|self={() => onClick()}
	/>
{/await}

<style>
	.animateEnemy {
		background-color: white;
		animation: movement var(--speed) linear forwards;
		animation-delay: var(--delay);
	}

	@keyframes movement {
		100% {
			transform: translate(var(--xB), var(--yB));
		}
	}
</style>
