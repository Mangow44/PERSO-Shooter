<script>
	import Enemy from '$lib/Enemy/index.svelte';
	import Cursor from '$lib/Cursor/index.svelte';

	export let game = [{}];
	export let player = { ammunition: 0, score: 0 };
	export let combo = 0;

	$: if (game) {
		game = [...game];
	}

	/**
	 * Function used to decrease the ammunition of the player and increase his score
	 * @param enemy
	 */
	const shoot = (enemy) => {
		if (player.ammunition == 0) {
			createAudio('/sounds/no_ammo.wav', 0.5);
			return false;
		}

		player.ammunition--;
		createAudio('/sounds/shoot.wav', 1);

		if (player.ammunition == 0) reload(1500);

		if (enemy == undefined) {
			combo = 0;
			return false;
		}

		createAudio('/sounds/destroy.wav', 0.3);
		combo++;
		player.score += game[game.indexOf(enemy)].score * combo;

		return true;
	};

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
		audio.preload = 'auto';
		audio.volume = volume;
		audio.play();
	};
</script>

<div
	id="game"
	class="relative h-[calc(100vh-6rem)] w-full m-auto no-cursor
        hide-cursor overflow-hidden bg-c-black"
	on:click|self={() => shoot(undefined)}
>
	{#each game as enemy (enemy.id)}
		<Enemy {...enemy} onClick={() => shoot(enemy)} />
	{/each}

	<slot />

	<Cursor />
</div>

<style>
	.no-cursor {
		cursor: none;
	}
</style>
