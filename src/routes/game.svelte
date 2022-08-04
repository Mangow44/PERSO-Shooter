<script>
	import { gameData } from '$lib/data/game';
	import { playerData } from '$lib/data/player';
	import Header from '$lib/Header/index.svelte';
	import Game from '$lib/Game/index.svelte';
	import Footer from '$lib/Footer/index.svelte';

	let game = gameData;
	let player = playerData;
</script>

<Header bind:player />
<Game bind:game bind:player />
<Footer bind:player />
