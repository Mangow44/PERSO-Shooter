<script>
	import Button from '$lib/utils/Button.svelte';

	export let game = [];
	export let foo = () => {};

	$: if (game) {
		setGameTimer();
	}

	let gameMenu = false;

	/**
	 * When all the enemies are gone, we show the game menu
	 */
	const setGameTimer = () => {
		let maxDuration = 0;

		game.forEach((enemy) => {
			let duration = enemy.delay + enemy.speed;
			if (duration > maxDuration) maxDuration = duration;
		});

		setTimeout(() => {
			gameMenu = true;
		}, (maxDuration + 0.5) * 1000);
	};
</script>

{#if gameMenu}
	<div
		class="flex absolute h-full w-full z-50
            bg-transparent"
	>
		<Button
			text={'play again'}
			foo={() => {
				gameMenu = false;
				foo();
			}}
		/>
	</div>
{/if}
