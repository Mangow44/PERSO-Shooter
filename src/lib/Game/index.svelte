<script>
	import Enemy from '$lib/Enemy/index.svelte';
	import Cursor from '$lib/Cursor/index.svelte';
	import { src_url_equal } from 'svelte/internal';

	export let game;
	export let player = { ammunition: 0, score: 0 };

	/**
	 * Function used to decrease the ammunition of the player and increase his score
	 * @param enemy
	 */
	const shoot = (enemy) => {
		if (player.ammunition == 0) {
			createAudio('/sounds/no_ammo.wav', 0.5);
			return;
		}


		player.ammunition--;
		createAudio('/sounds/shoot.wav', 1);

		if (player.ammunition == 0) reload(3000);

		if (enemy == undefined) return;

		createAudio('/sounds/destroy.wav', 0.3);
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
			createAudio('/sounds/reload.wav', 1);
		}, duration);
	};

	/**
	 * Function to create a custom audio
	 * @param src
	 * @param volume
	 */
	const createAudio = (src, volume) => {
		var audio = new Audio(src);
		audio.volume = volume;
		console.log(audio.volume);
		audio.play();
	};
</script>

<div
	id="game"
	class="relative h-[calc(100vh-6rem)] w-full m-auto no-cursor
        hide-cursor overflow-hidden bg-c-black"
	on:click|self={() => shoot(null)}
>
	{#each game as enemy}
		<Enemy {...enemy} onClick={() => shoot(enemy)} removeEnemy={(id) => removeEnemy(id)} />
	{/each}

	<Cursor offsetTop={48} />
</div>

<style>
	.no-cursor {
		cursor: none;
	}
</style>
