<script>
	import { onMount } from 'svelte';
	import { gameData } from '$lib/js/data/game';
	import { playerData } from '$lib/js/data/player';
	import { generateGameData } from '$lib/js/generation/generateGameData';
	import Header from '$lib/Header/index.svelte';
	import Game from '$lib/Game/index.svelte';
	import Footer from '$lib/Footer/index.svelte';

	let game = gameData;
	let player = playerData;

	const loadGameData = async () => {
		onMount(() => {
			generateGameData(game);
		});
	};
</script>

{#await loadGameData() then _}
	<Header bind:player />
	<Game bind:game bind:player />
	<Footer bind:player />
{/await}
