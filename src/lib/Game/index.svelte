<script>
	import Enemy from '$lib/Enemy/index.svelte';
	import Cursor from '$lib/Cursor/index.svelte';

	export let game;
	export let player = { ammunition: 0, score: 0 };

	/**
	 * Function used to decrease the ammunition of the player and increase his score
	 * @param enemy
	 */
	const shoot = (enemy) => {
		if (player.ammunition == 0) {
			let audioNoAmmo = new Audio('/sounds/no_ammo.wav');
			audioNoAmmo.volume = 0.5;
			audioNoAmmo.play();
			return;
		}

		new Audio('/sounds/shoot.wav').play();
		player.ammunition--;

		if (player.ammunition == 0) reload(3000);

		if (enemy == undefined) return;

		let audioDestroy = new Audio('/sounds/destroy.wav');
		audioDestroy.volume = 0.3;
		audioDestroy.play();
		player.score += game[game.indexOf(enemy)].score;
		removeEnemy(enemy.id);
	};

	/**
	 * Function used to remove an enemy from html
	 * @param enemyId
	 */
	async function removeEnemy(enemyId) {
		let parent = document.querySelector('#game');
		let div = document.querySelector('#' + enemyId);
		parent?.removeChild(div);
	}

	/**
	 * Cooldown to reload the gun
	 * @param duration
	 */
	const reload = (duration) => {
		setTimeout(() => {
			player.ammunition = 10;
			new Audio('/sounds/reload.wav').play();
		}, duration);
	};
</script>

<main class="no-cursor">
	<div
		id="game"
		class="relative h-[calc(100vh-6rem)] w-full m-auto
        hide-cursor overflow-hidden bg-c-black"
		on:click|self={() => shoot(null)}
	>
		{#each game as enemy}
			<Enemy {...enemy} onClick={() => shoot(enemy)} removeEnemy={(id) => removeEnemy(id)} />
		{/each}

		<Cursor offsetTop={48} ammunition={player.ammunition} />
	</div>
</main>

<style>
	.no-cursor {
		cursor: none;
	}
</style>
