<script>
	import Combo from '$lib/Combo/Combo.svelte';

	export let player = { score: 0 };
	export let combo = 0;
</script>

<div
	class="flex h-[3rem] w-full min-w-[270px] relative
		text-c-white bg-c-dark-gray font-retrogaming"
>
	<h2 class="m-auto uppercase text-4xl">
		{player.score}
	</h2>

	<h3 class="absolute right-5 top-2">
		<Combo {combo} />
	</h3>
</div>
