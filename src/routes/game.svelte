<script>
	import { onMount } from 'svelte';
	import { gameData } from '$lib/js/data/game';
	import { playerData } from '$lib/js/data/player';
	import { generateGameData } from '$lib/js/generation/generateGameData';
	import Header from '$lib/Header/index.svelte';
	import Game from '$lib/Game/index.svelte';
	import GameMenu from '$lib/GameMenu/index.svelte';
	import Footer from '$lib/Footer/index.svelte';

	let game = gameData;
	let player = playerData;
	let combo = 0;

	const loadGameData = async () => {
		onMount(() => {
			game = generateGameData(game);
		});
	};

	const resetGame = () => {
		game = generateGameData(game);
		player = { score: 0, ammunition: 10 };
		combo = 0;
	};
</script>

{#await loadGameData() then _}
	<Header {player} {combo} />
	<Game {game} bind:player bind:combo>
		<GameMenu {game} foo={() => resetGame()} />
	</Game>
	<Footer {player} />
{/await}
