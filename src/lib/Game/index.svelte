<script>
	import { gameData } from '$lib/data/game';
	import { playerData } from '$lib/data/player';
	import Enemy from '$lib/Enemy/index.svelte';

	let game = gameData;
	let player = playerData;

	/**
	 * Function used to decrease the ammunition of the player and increase his score
	 * @param enemy
	 */
	const shoot = (enemy) => {
		if (player.ammunition == 0) return;
		if (player.ammunition > 0) player.ammunition--;
		if (player.ammunition == 0) reload(3000);

		if (enemy == undefined) return;
		player.score += game[game.indexOf(enemy)].score;
		removeEnemy(enemy.id);
	};

	/**
	 * Function used to hide an enemy
	 * @param enemyId
	 */
	async function removeEnemy(enemyId) {
		let div = document.querySelector('#' + enemyId);
		div?.classList.add('remove');
	}

	/**
	 * Cooldown to reload the gun
	 * @param duration
	 */
	const reload = (duration) => {
		setTimeout(() => {
			player.ammunition = 10;
		}, duration);
	};
</script>

<div
	class="h-[3rem] w-full 
		text-white bg-c-dark-gray"
>
	score : {player.score}
</div>

<div
	id="game"
	class="relative h-[calc(100vh-6rem)] w-full m-auto
        overflow-hidden bg-c-black"
	on:click|self={() => shoot(null)}
>
	{#each game as enemy}
		<Enemy {...enemy} onClick={() => shoot(enemy)} />
	{/each}
</div>

<div
	class="h-[3rem] w-full
		text-white bg-c-dark-gray"
>
	ammunition : {player.ammunition}
</div>
