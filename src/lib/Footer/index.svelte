<script>
	export let player = { ammunition: 0 };

	let ammunition = [];

	$: if (player) {
		ammunition = [];
		let nbTrue = player.ammunition;
		let nbFalse = 10 - player.ammunition;

		for (let i = 0; i < nbTrue; i++) {
			ammunition = [...ammunition, true];
		}
		for (let i = 0; i < nbFalse; i++) {
			ammunition = [...ammunition, false];
		}
	}
</script>

<div
	class="flex h-[3rem] w-full
		text-c-white bg-c-dark-gray"
>
	<div class="flex m-auto">
		{#each ammunition as ammo}
			<span class="h-4 w-4 transition-colors {ammo ? 'bg-white' : 'bg-gray-500'} " />
		{/each}
	</div>
</div>
